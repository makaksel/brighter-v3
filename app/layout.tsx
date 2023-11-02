import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'

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
      <body className={onest.className}>{children}</body>
    </html>
  )
}
