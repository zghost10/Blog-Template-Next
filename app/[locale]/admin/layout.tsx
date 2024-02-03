'use client';
import '@/app/globals.scss';
import { Nunito } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { Background } from '@/components/background';

const font = Nunito({ subsets: ['latin'] })

interface IProps {
  params: {
    locale: string,
    session: any
  }
  children: React.ReactNode;
}
const RootLayout: React.FC<IProps> = ({ params, children }) => {
  const path = usePathname();

  return <html lang="pt">
    <body className={`
      ${font.className} relative min-h-screen
    `}>
      <main className={`h-screen overflow-y-auto flex flex-col min-h-screen bg-black-noise ${path === '/contact' ? '' : 'pb-12 sm:pb-0'}`}>
        {children}
      </main>

      <footer>
      </footer>

      <Background/>
    </body>
  </html>
}
export default RootLayout;