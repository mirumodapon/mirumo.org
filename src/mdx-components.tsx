import { ReactNode } from 'react';
import type { MDXComponents } from 'mdx/types';
import 'prism-themes/themes/prism-material-dark.min.css';

function MarkdownWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="w-vw h-vh dark:bg-black [&_*]:dark:text-white p-3">
      <div className="prose m-auto prose-code:before:hidden prose-code:after:hidden [&_*]:box-content">
        {children}
      </div>
    </main>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: MarkdownWrapper,
    ...components
  };
}
