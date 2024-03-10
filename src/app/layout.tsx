import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google'
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
      <head>
        <GoogleAnalytics gaId="G-V4Z00NVGRT" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "ledccdbfas");`
        }}></script>
      </head>
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
