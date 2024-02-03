import { Container } from "@/components/container";
import { PostCard } from "@/components/postcard";
import { categoryRepository } from "@/services/category";

const Page = async ({params}: {
  params: {
    locale: string
    cat: string;
  }
}) => {
  const cat: any = await categoryRepository.get(params.cat)

  return cat ? <>
    <title> - Blog</title>

    <Container className="my-28">
      <h2 className="mb-8 font-semibold text-xs uppercase">
        - Categoria<br/>
        <span className="font-bold text-3xl text-coffee-500">
          {cat.name}
        </span>
      </h2>
      <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {
          cat.posts && cat.posts.length > 0 ?
          cat.posts.map((post: any, key: number) => post && <PostCard key={key} post={post}/>) :
          <p>Ops! Ainda não há nenhuma publicação.</p>
        }
      </div>
    </Container>
  </> : <>
    <title>Não encontrado! - Blog</title>

    <Container className="my-24">
      <article className="prose lg:prose-xl dark:prose-invert">
        <p>Essa categoria não existe!</p>
      </article>
    </Container>
  </>
}
export default Page;