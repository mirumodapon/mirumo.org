import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';

interface Props {
  children: Readonly<ReactNode>;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}
