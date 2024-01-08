'use client'
import Link from "next/link";
import { Button } from "./button"
import { Container } from "./container"
import navbarOptions from '@/_data/navbar.json';
import { PiFacebookLogo, PiInstagramLogo, PiMagnifyingGlass, PiPinterestLogo } from 'react-icons/pi'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const path = usePathname()

  return <nav className="fixed top-0 left-0 h-36 w-screen bg-zinc-950 z-30">
    <Container className="h-full">
      <div className="flex flex-col justify-center items-center gap-8 h-full">
        <div className="grid grid-cols-3 w-full">
          <div className="flex justify-start items-start gap-3">
            <Link href="#" ><PiFacebookLogo className="text-emerald-800 w-[1.7rem] h-[1.7rem]"/></Link>
            <Link href="#" ><PiInstagramLogo className="text-emerald-800 w-[1.7rem] h-[1.7rem]"/></Link>
            <Link href="#" ><PiPinterestLogo className="text-emerald-800 w-[1.7rem] h-[1.7rem]"/></Link>
          </div>

          <div className="flex justify-center items-start">
            <h2 className="font-bold text-3xl text-white">
              Awesome Blog
            </h2>
          </div>

          <div className="flex justify-end items-start">
            <div className="relative flex justify-end items-center">
              <PiMagnifyingGlass className="text-emerald-800 absolute start-2 w-[1.2rem] h-[1.2rem]"/>
              <input type="text" placeholder="Pesquisar" className="flex pl-8 pr-2 py-2 w-[9rem] bg-transparent"/>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {navbarOptions.map((option,key) => (
            <Button key={key} href={option.route} active={path === option.route}>
              {option.label}
            </Button>
          ))}
        </div>
      </div>
    </Container>
  </nav>
}