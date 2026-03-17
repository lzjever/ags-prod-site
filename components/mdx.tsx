import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { SiteSection } from '@/components/site/site-section';
import { StatusBadge } from '@/components/site/status-badge';
import { ScreenshotFrame } from '@/components/site/screenshot-frame';
import { Eyebrow } from '@/components/site/eyebrow';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    SiteSection,
    StatusBadge,
    ScreenshotFrame,
    Eyebrow,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
