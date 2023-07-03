import Link from "next/link"

export const Footer = () => {
  return <div className="flex flex-col justify-center items-center py-16 bg-zinc-800 dark:bg-zinc-950 text-white">
    <p className="font-bold text-xs text-center">
      &copy; {new Date().getFullYear()} Created with pride by <Link href='https://github.com/zghost10' className="text-green-700 dark:text-sky-600">Zghost10</Link>.
    </p>
  </div>
}