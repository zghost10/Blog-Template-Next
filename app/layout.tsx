import { Navbar } from '@/components/navbar'
import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className='mt-36 mb-16'>
          {children}
        </main>
      </body>
    </html>
  )
}
