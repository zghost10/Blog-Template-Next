import { Container } from "@/components/container";
import Link from 'next/link';

const Page = async ({params}: {
  params: {
    locale: string
    page: string;
  }
}) => {
  return <>
    <title>Page not found! - Blog</title>

    <Container className="my-24">
      <article className="prose lg:prose-xl dark:prose-invert">
        <p>Ops! Ainda não há nenhuma publicação.</p>
      </article>
    </Container>
  </>
}
export default Page;