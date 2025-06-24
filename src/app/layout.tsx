import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '青之鹰博客 - 为写作者而生的博客平台',
  description: '无需编程，轻松搭建个人博客。完美支持Obsidian、Typora等笔记软件，让写作更专注。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 