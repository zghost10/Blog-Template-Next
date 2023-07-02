import { IPost } from "@/types/blog";
import Link from 'next/link';

interface IPostCardProps {
  post: IPost;
}

export const PostCard: React.FC<IPostCardProps> = ({post}) => {
  const {frontmatter, slug} = post;
  return <Link href={slug} className="flex flex-col py-2 mb-10 no-underline">
    <h3 className="m-0">
      {frontmatter.title}
    </h3>
    {frontmatter.description}
    <div className="flex justify-end w-full">
      <p className="font-normal text-sm">Created at: {frontmatter.created.toISOString().split('T')[0]}</p>
    </div>
  </Link>
}