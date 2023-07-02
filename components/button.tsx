import Link from 'next/link';

interface IButton {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

export const Button: React.FC<IButton> = ({children,href,className}) => {
  return <Link href={href} className={` ${className}`}>
    {children}
  </Link>
}