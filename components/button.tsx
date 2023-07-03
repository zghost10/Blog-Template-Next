import Link from 'next/link';

interface IButton {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

export const Button: React.FC<IButton> = ({children,href,className}) => {
  return <Link href={href} className={`uppercase font-bold text-base text-gray-200 hover:text-white dark:text-gray-200 dark:hover:text-white ${className}`}>
    {children}
  </Link>
}