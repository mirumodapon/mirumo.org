import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';
import '@/assets/styles/global.css';

interface Props {
  children: Readonly<ReactNode>;
}

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
