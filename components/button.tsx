import Link from "next/link";
import Icon from "./icon";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface IProps {
  className?: string
  children?: React.ReactNode
  variant?: "nav" | "lang" | "primary" | "primary-lines" | "secondary-lines"
  span?: string
  bold?: boolean
  icon?: IconDefinition
}
interface IButton {
  type: "button"
  href?: never
  target?: never
  active?: never
}
interface ILink {
  type: "link"
  href?: string
  target?: 'blank'
  active?: boolean
}

const Button: React.FC<IProps & (IButton | ILink)> = ({type, href, icon, className, children, variant, active, bold, target}) => {
  let styles: string = '';
  
  switch(variant){
    case 'nav':
      styles = `
        flex ${active ? 'underline underline-offset-8 decoration-2 decoration-coffee-400' : ''}
        hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-coffee-400
      `;
      break;

    case 'primary-lines':
      styles = `
        ${bold ? 'font-bold' : 'font-normal'} text-base text-zinc-950
        flex ${bold ? 'px-3 py-2' : 'px-2 py-1'} bg-coffee-400 rounded-lg items-center justify-center
        hover:bg-coffee-500 hover:text-black
      `;
      break;

    case 'secondary-lines':
      styles = `
        ${bold ? 'font-bold' : 'font-normal'} text-base text-white
        flex ${bold ? 'px-3 py-2' : 'px-2 py-1'} rounded-lg
        border border-4 border-coffee-400
        hover:border hover:border-4 hover:border-coffee-600 hover:bg-coffee-600 hover:text-gray-200
      `;
      break;

    case 'lang':
      styles = `
        ${bold ? 'font-bold' : 'font-normal'} text-sm text-gray-200
        flex ${bold ? 'px-2 py-1' : 'px-2 py-1'} rounded-md
        border border-2 border-coffee-400
        hover:bg-coffee-700 hover:border-transparent
      `;
      break;

    default:
      styles = `
        ${bold ? 'font-bold' : 'font-normal'} text-sm text-gray-200
        flex ${bold ? 'px-2.5 py-1.5' : 'px-2 py-1'} bg-coffee-600 rounded-full
        hover:bg-coffee-700
      `;
      break;
  }

  switch(type){
    case "link":
      return <Link href={href ?? '#'} className={`${className ?? ''} ${styles}`}>
        {
          !icon ?
          children 
            : 
          <div className="flex gap-2">
            <Icon icon={icon} className={`${variant === 'nav' && children !== undefined ? 'sm:hidden' : 'hidden lg:block'} w-[1.5rem] h-[1.5rem] text-white ${variant==='nav'?'hover:text-coffee-400':''}`}/>
            {children}
          </div>
        }
      </Link>
    
    default:
      return <button className={`${className ?? ''} ${styles}`}>
        {
          icon ?
          children 
            : 
          <div className="flex gap-2">
            <Icon icon={icon} className={`w-[1.5rem] h-[1.5rem] text-white ${variant==='nav'?'hover:text-coffee-400':''}`}/>
            {children}
          </div>
        }
      </button>
  }
}
export default Button;