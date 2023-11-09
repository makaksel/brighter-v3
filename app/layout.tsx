import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'
import './page.scss'
import { SvgSprite } from "@/src/shared/Svg/SvgSprite";

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Поярче',
  description: 'Суперсила для вашего бизнеса — дизайн подписка',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={onest.className}>
      <SvgSprite />
      {children}
      </body>
    </html>
  )
}
