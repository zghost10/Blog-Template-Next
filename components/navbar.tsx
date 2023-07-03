import { Button } from "./button"
import { Container } from "./container"
import navbarOptions from '@/_data/navbar.json';

export const Navbar = () => {
  return <nav className="fixed top-0 left-0 h-28 w-screen bg-zinc-800 dark:bg-zinc-950">
    <Container className="h-full">
      <div className="flex items-center gap-8 h-full">
        <div>
          <h2 className="font-bold text-3xl text-white">BLOG</h2>
        </div>

        <div className="flex gap-4">
          {navbarOptions.map((option,key) => (
            <Button key={key} href={option.route}>
              {option.label}
            </Button>
          ))}
        </div>
      </div>
    </Container>
  </nav>
}