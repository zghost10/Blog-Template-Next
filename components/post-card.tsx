import { IPost } from "@/types/blog";
import Link from 'next/link';

interface IPostCardProps {
  post: IPost;
}

export const PostCard: React.FC<IPostCardProps> = ({post}) => {
  const {frontmatter, slug} = post;
  return <Link href={slug} className="flex flex-col py-4 no-underline">
    <h5>{frontmatter.title}</h5>
    <h6>{frontmatter.description}</h6>
  </Link>
}