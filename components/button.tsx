import Link from 'next/link';

interface IButton {
  children?: React.ReactNode
  className?: string
  href: string
  active?: boolean
}

export const Button: React.FC<IButton> = ({children, href, className, active}) => {
  return <Link href={href} className={`font-normal text-base hover:text-white ${active ? "text-white" : "text-gray-500 "} ${className}`}>
    {children}
  </Link>
}