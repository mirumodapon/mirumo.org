/** @type {import('next').NextConfig} */

// const withMDX = require('@next/mdx')();

import remarkGfm from 'remark-gfm';
import remarkBehead from 'remark-behead';
import remarkPrism from 'remark-prism';
import remarkBreaks from 'remark-breaks';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      [remarkBehead, { depth: 1 }],
      [remarkPrism, { transformInlineCode: true }],
      remarkGfm,
      remarkBreaks
    ],
    rehypePlugins: []
  }
});

const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'www.gravatar.com' }]
  }
};

export default withMDX(nextConfig);
