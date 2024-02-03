import '@/app/globals.scss';
import { Nunito } from 'next/font/google';

const font = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`
        ${font.className} relative min-h-screen
      `}>
        <main className={`h-screen overflow-y-auto flex flex-col min-h-screen bg-black-noise pb-12 sm:pb-0`}>
          {children}
        </main>
      </body>
    </html>
  )
}
