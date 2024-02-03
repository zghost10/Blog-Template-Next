import { Container } from "@/components/container";
import { MDXRemote } from "next-mdx-remote/rsc";
import Header from "@/components/header";
import { postRepository } from "@/services/post";

const Post = async ({params}: {
  params: {
    locale: string;
    cat: string;
    slug: string;
  }
}) => {
  const post = await postRepository.get(params.cat, params.slug)

  if(post){
    return <>
      <title>{`${post.title} - Blog`}</title>

      <Header post={post}/>

      <Container className="my-10">
        <article className="prose lg:prose-xl dark:prose-invert">
          {post.content && <MDXRemote source={post.content}/>}
        </article>
      </Container>
    </>
  }else{
    return <>
      <title>Post not found! - Blog</title>

      <Container className="my-24">
        <article className="prose lg:prose-xl dark:prose-invert">
          <p>Ops! Ainda não há nenhuma publicação.</p>
        </article>
      </Container>
    </>
  }
}
export default Post;