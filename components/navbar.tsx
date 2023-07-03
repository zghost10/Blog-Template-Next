import { Button } from "./button"
import { Container } from "./container"

export const Navbar = () => {
  return <nav className="fixed top-0 left-0 h-28 w-screen bg-gray-900">
    <Container className="h-full">
      <div className="flex items-center gap-8 h-full">
        <div>
          <h2 className="font-bold text-3xl text-white">BLOG</h2>
        </div>

        <div className="flex">
          <Button href='/'>
            Home
          </Button>
        </div>
      </div>
    </Container>
  </nav>
}