import { Header } from '@/src/components/Header';
import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import Head from 'next/head';
import React from 'react';
import './globals.css';
import './page.scss';

const onest = Onest({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Суперсила для вашего бизнеса — дизайн подписка',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const YM_ID = process.env.YANDEX_METRICA_ACCOUNT;

  return (
    <html lang="ru">
      <Head>
        {!!YM_ID && <meta name="yandex-verification" content="81fbb74eb4bd19d6" />}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <body className={onest.className}>
        {!!YM_ID && (
          <noscript>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${YM_ID}`}
                style={{
                  position: 'absolute',
                  left: '-9999px',
                }}
                alt=""
              />
            </div>
          </noscript>
        )}

        <Header />
        {children}
      </body>
    </html>
  );
}
