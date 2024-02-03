'use client';
import Button from "./button";
import { useParams, usePathname } from 'next/navigation';
import { Indie_Flower, Nunito } from "next/font/google";
import { Logo } from "./logo";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper, faServer, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

const nunito = Nunito({subsets: ['latin'], weight: '900'});
const indie = Indie_Flower({subsets: ['latin'], weight: '400'});

export const routes = {
  pt: [
    {
      icon: faNewspaper,
      path: '/',
      name: 'Novidades'
    },
    {
      icon: faWindowMaximize,
      path: '/front-end',
      name: 'Front-end'
    },
    {
      icon: faServer,
      path: '/back-end',
      name: 'Back-end'
    },
    {
      icon: faReact,
      path: '/components',
      name: 'Componentes'
    }
  ],
  en: [
    {
      icon: faNewspaper,
      path: '/en',
      name: 'Novidades'
    },
    {
      icon: faWindowMaximize,
      path: '/en/front-end',
      name: 'Front-end'
    },
    {
      icon: faServer,
      path: '/en/back-end',
      name: 'Back-end'
    },
    {
      icon: faReact,
      path: '/en/components',
      name: 'Components'
    },
  ]
}

interface IProps {
  header?: boolean
}
const Navbar: React.FC<IProps> = ({header}) => {
  const path = usePathname();
  const { locale } = useParams();

  const [y, setY] = useState<number>(0);
  
  const handleScroll = () => {
    setY(window.scrollY);
  }

  useEffect( () => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
  },[]);

  const alt = header && y === 0;

  return <nav className={`
    ${!alt ? 'fixed top-0 left-0 backdrop-blur-sm bg-zinc-900/95 z-20' : ''}
    ${nunito.className} font-bold text-xl w-full
  `}>
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-row-flow mx-4 lg:mx-20 my-4 h-full">
        <Link href='/' className="flex justify-start items-center">
          <Logo size={alt ? 70 : 50}/>
          <p className={`${!alt ? 'block md:hidden lg:block' : 'md:hidden'} ${indie.className} text-coffee-400 text-2xl`}>
            blog.<span className="text-white">caroso.dev</span>
          </p>
        </Link>

        <div className="hidden md:flex md:col-span-2 justify-center items-center gap-5 z-10">
          {
            locale === ("pt" || "en") && routes[locale].map((route, key) => (
              <div key={key} className={!route.name ? 'hidden' : ''}>
                {
                  route.icon !== undefined ?
                  <Button 
                    href={route.path} type="link" variant="nav"
                    className="text-sm lg:text-base"
                    active={((route.path === "/" || route.path === "/en") && (path === "/" || path === "/en")) || (route.path !== "/" && route.path !== "/en" && path.includes(route.path)) ? true : false}
                    icon={route.icon}
                  >
                    {route.name}
                  </Button>
                    :  
                  <Button
                    href={route.path} type="link" variant="nav"
                    className="text-sm lg:text-base"
                    active={((route.path === "/" || route.path === "/en") && (path === "/" || path === "/en")) || (route.path !== "/" && route.path !== "/en" && path.includes(route.path)) ? true : false}
                  >
                    {route.name}
                  </Button>
                }
              </div>
            )
          )}
        </div>

        <div className={`flex justify-end items-center gap-3`}>
          <Button 
            href={`https://www.caroso.dev/${locale}`}
            type="link" 
            variant="primary"
            bold
          >
            {locale === 'pt' ? 'Portfólio' : 'Portfolio!'}
          </Button>

          <Button 
            href={locale === 'pt' ? `/en${path}` : `${path.replace("en", "pt")}`}
            type="link" 
            variant="lang"
            bold
          >
            {locale === 'pt' ? 'EN' : 'PT'}
          </Button>
        </div>
      </div>
    </div>
  </nav>
}
export default Navbar;