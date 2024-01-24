import { Container } from "@/components/container";
import { getPostBySlug } from "@/lib";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from 'next/link';
import Header from "@/components/header";

const Post = async ({params}: {
  params: {
    locale: string;
    page: string;
    slug: string;
  }
}) => {
  const post = await getPostBySlug(params.locale, params.slug);

  if(post && params.page === post.frontmatter.category.toLowerCase()){
    const { frontmatter, content } = post;
  
    return <>
      <title>{`${frontmatter?.title} - Blog`}</title>

      <Header frontmatter={frontmatter}/>
      <Container className="my-24">
        <article className="prose lg:prose-xl dark:prose-invert">
          <MDXRemote source={content}/>
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