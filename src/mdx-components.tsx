import { ReactNode } from 'react';
import type { MDXComponents } from 'mdx/types';
import 'prism-themes/themes/prism-material-dark.min.css';

function MarkdownWrapper({ children }: { children: ReactNode }) {
  return <div className="prose m-auto prose-code:before:hidden prose-code:after:hidden">{children}</div>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: MarkdownWrapper,
    ...components
  };
}
