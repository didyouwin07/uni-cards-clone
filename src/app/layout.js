import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uni Cards: Next-Gen Credit Cards and rewards',
  description: 'Uni Cards: Next-Gen Credit Cards and rewards',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
