'use client';
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { routes } from "./navbar";
import Icon from "./icon";

const Mobilebar:React.FC = () => {
  const path = usePathname();
  const { locale } = useParams();

  return (
    <div className="
      md:hidden fixed bottom-0 flex flex-wrap justify-center gap-5 w-screen h-16 px-2 z-50
      transition ease-in-out duration-500 bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-t-md
    ">
      {
        locale === ('pt' || 'en') && routes[locale].map((opt, key) => {
          const active = (opt.path === "/" && path === "/") || (opt.path !== "/" && path.includes(opt.path))
          
          return (
            <Link key={key} href={opt.path ? `${opt.path}` : '#'} className="flex flex-col justify-center items-center">
              <div className={`flex flex-row gap-2 justify-center items-center rounded-full ${active ? 'bg-coffee-600' : ''} py-2 px-3`}>
                <Icon icon={opt.icon} size={5}/>
                <p className={`${active?'':'hidden'} font-bold text-sm m-0`}>{opt.name}</p>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}
export default Mobilebar;