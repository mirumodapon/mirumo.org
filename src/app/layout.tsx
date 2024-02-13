import { ReactNode } from 'react';
import type { Metadata } from 'next';
import 'tailwindcss/tailwind.css';
import '@/assets/styles/global.css';

interface Props {
  children: Readonly<ReactNode>;
}

export const metadata: Metadata = {
  title: '咪路'
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="zh-TW">
      <body>
        <template
          dangerouslySetInnerHTML={{
            __html: `<!--
                 _                  _       
                | |    ᥫ᭡.         | |      
                | |     _ _ __   __| |_   _ 
                | |    | | '_ \\ / _\` | | | |
                | |____| | | | | (_| | |_| |
                |______|_|_| |_|\__,_|\__, |
                                       __/ |
                                      |___/ 

                                            ٩(ˊᗜˋ*)و ♡
      -->`
          }}
        />
        {children}
      </body>
    </html>
  );
}
