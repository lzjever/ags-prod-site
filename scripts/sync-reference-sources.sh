#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PRD_SOURCE="${PRD_SOURCE:-$ROOT_DIR/../重构的PRD文档v1}"
PRODUCT_DOCS_SOURCE="${PRODUCT_DOCS_SOURCE:-$ROOT_DIR/../agentsmith/artifacts/product-docs}"
REFERENCES_DIR="$ROOT_DIR/references"
PRD_TARGET="$REFERENCES_DIR/prd-v1"
PRODUCT_DOCS_TARGET="$REFERENCES_DIR/product-docs"
MODE="${1:-latest}"

usage() {
  cat <<'EOF'
Usage:
  ./scripts/sync-reference-sources.sh [latest|all]

Modes:
  latest  Copy the full PRD folder and only the latest product-docs snapshot. (default)
  all     Copy the full PRD folder and all product-docs snapshots.
EOF
}

require_dir() {
  local dir_path="$1"
  if [[ ! -d "$dir_path" ]]; then
    printf 'Source directory not found: %s\n' "$dir_path" >&2
    exit 1
  fi
}

copy_dir() {
  local source_dir="$1"
  local target_dir="$2"
  mkdir -p "$target_dir"
  rsync -a --delete "$source_dir"/ "$target_dir"/
}

main() {
  if [[ "$MODE" != "latest" && "$MODE" != "all" && "$MODE" != "--help" && "$MODE" != "-h" ]]; then
    usage
    exit 1
  fi

  if [[ "$MODE" == "--help" || "$MODE" == "-h" ]]; then
    usage
    exit 0
  fi

  require_dir "$PRD_SOURCE"
  require_dir "$PRODUCT_DOCS_SOURCE"

  mkdir -p "$REFERENCES_DIR"

  printf 'Syncing PRD source...\n'
  copy_dir "$PRD_SOURCE" "$PRD_TARGET"

  printf 'Syncing product-docs source...\n'
  mkdir -p "$PRODUCT_DOCS_TARGET"

  if [[ "$MODE" == "all" ]]; then
    copy_dir "$PRODUCT_DOCS_SOURCE" "$PRODUCT_DOCS_TARGET/all"
    latest_snapshot="$(find "$PRODUCT_DOCS_SOURCE" -mindepth 1 -maxdepth 1 -type d | sort | tail -n 1)"
    printf '%s\n' "$(basename "$latest_snapshot")" > "$PRODUCT_DOCS_TARGET/LATEST_SNAPSHOT.txt"
    copy_dir "$latest_snapshot" "$PRODUCT_DOCS_TARGET/latest"
  else
    latest_snapshot="$(find "$PRODUCT_DOCS_SOURCE" -mindepth 1 -maxdepth 1 -type d | sort | tail -n 1)"
    if [[ -z "$latest_snapshot" ]]; then
      printf 'No product-docs snapshots found in: %s\n' "$PRODUCT_DOCS_SOURCE" >&2
      exit 1
    fi
    printf '%s\n' "$(basename "$latest_snapshot")" > "$PRODUCT_DOCS_TARGET/LATEST_SNAPSHOT.txt"
    copy_dir "$latest_snapshot" "$PRODUCT_DOCS_TARGET/latest"
  fi

  cat > "$REFERENCES_DIR/README.md" <<EOF
# 参考资料同步说明

- PRD 来源：\`$PRD_SOURCE\`
- 产品文档截图来源：\`$PRODUCT_DOCS_SOURCE\`
- 同步时间：$(date '+%Y-%m-%d %H:%M:%S %Z')
- 同步模式：\`$MODE\`

建议在每次内容编排、文案更新、截图替换前先执行：

\`\`\`bash
./scripts/sync-reference-sources.sh
\`\`\`
EOF

  printf 'Done. References synced into %s\n' "$REFERENCES_DIR"
}

main "$@"
