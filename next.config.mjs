/** @type {import('next').NextConfig} */

// const withMDX = require('@next/mdx')();

import remarkGfm from 'remark-gfm';
import remarkBehead from 'remark-behead';
import remarkPrism from 'remark-prism';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    remarkPlugins: [[remarkBehead, { depth: 1 }], [remarkPrism, { transformInlineCode: true }], remarkGfm],
    rehypePlugins: []
  }
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'www.gravatar.com' }]
  }
};

export default withMDX(nextConfig);