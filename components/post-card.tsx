import { IPost } from "@/types/blog";
import Link from 'next/link';

interface IPostCardProps {
  post: IPost;
}

export const PostCard: React.FC<IPostCardProps> = ({post}) => {
  const {frontmatter, slug} = post;
  return <Link href={`/${frontmatter.category.toLowerCase()}/${slug}`} className="flex flex-col gap-4 p-3 mb-10 no-underline rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-950 border border-gray-200 dark:border-zinc-900">
    <h3 className="font-bold text-2xl m-0">
      {frontmatter.title}
    </h3>
    <p className="font-normal text-base truncate">
      {frontmatter.description}
    </p>
    <div className="flex justify-between items-center w-full">
      <p className="font-normal text-xs text-start">
        <span className="font-bold">Category:</span> <br/> 
        {frontmatter.category}
      </p>
      <p className="font-normal text-xs text-end">
        <span className="font-bold">Created at:</span> <br/> {frontmatter.created.toISOString().split('T')[0]}
      </p>
    </div>
  </Link>
}