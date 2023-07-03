import { IPost } from "@/types/blog";
import Link from 'next/link';

interface IPostCardProps {
  post: IPost;
}

export const PostCard: React.FC<IPostCardProps> = ({post}) => {
  const {frontmatter, slug} = post;
  return <Link href={slug} className="flex flex-col p-3 mb-10 no-underline rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-950 border border-gray-200 dark:border-zinc-900">
    <h3 className="m-0">
      {frontmatter.title}
    </h3>
    {frontmatter.description}
    <div className="flex justify-end w-full">
      <p className="font-normal text-sm">Created at: {frontmatter.created.toISOString().split('T')[0]}</p>
    </div>
  </Link>
}