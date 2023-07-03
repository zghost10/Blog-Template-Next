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
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-4xl">{frontmatter?.title}</h3>
          <p className="font-normal text-xs">
            {frontmatter.created.toString()}
          </p>
          <p className="font-normal text-xs">
            #{frontmatter.category}
          </p>
        </div>
        <hr className="h-px my-8 bg-gray-300 dark:bg-zinc-900 border-0 rounded-lg"></hr>

        <article className="prose lg:prose-xl dark:prose-invert">
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