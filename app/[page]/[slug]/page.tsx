import { Container } from "@/components/container";
import { getPostBySlug } from "@/lib";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from 'next/link';

const Post = async ({params}: {
  params: {
    page: string;
    slug: string;
  }
}) => {
  const post = await getPostBySlug(params.slug);

  if(post && params.page === post.frontmatter.category.toLowerCase()){
    const { frontmatter, content } = post;
  
    return <>
      <title>{`${frontmatter?.title} - Blog`}</title>
  
      <Container className="my-16">
        <article className="prose lg:prose-xl dark:prose-invert">
          <h3>{frontmatter?.title}</h3>

          <MDXRemote source={content}/>
        </article>
      </Container>
    </>
  }else{
    return <>
      <title>Post not found! - Blog</title>

      <Container className="my-16">
        <article className="prose lg:prose-xl dark:prose-invert">
          <h3>404 - Post not found!</h3>

          Try to write the post slug correctly or go to <Link href="/">blog home</Link> instead.
        </article>
      </Container>
    </>
  }
}
export default Post;