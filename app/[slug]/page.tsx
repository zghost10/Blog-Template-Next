import { Container } from "@/components/container";
import { getPostBySlug } from "@/lib/blog";

interface IPostProps {
  params: {
    slug: string;
  }
}

export const Post: React.FC<IPostProps> = ({params}) => {
  const content = getPostBySlug(params.slug);

  return <>
    <title>Post title - Blog</title>

    <Container>
      <article className="prose lg:prose-xl dark:prose-invert">
        <h3>Blog post</h3>

        Content
      </article>
    </Container>
  </>
}
export default Post;