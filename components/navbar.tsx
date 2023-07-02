import { Button } from "./button"
import { Container } from "./container"

export const Navbar = () => {
  return <nav className="flex p-8 bg-gray-900 w-full">
    <Container>
      <div className="flex items-center gap-8">
        <div>
          <h2 className="font-bold text-3xl">BLOG</h2>
        </div>

        <div>
          <Button href='/'>
            Home
          </Button>
        </div>
      </div>
    </Container>
  </nav>
}