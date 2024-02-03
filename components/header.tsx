import { IPost } from "@/types/blog"
import { toLongDateString } from "@/utils/date"
import { FC } from "react"

type Props = {
  post: IPost
}

const Header: FC<Props> = ({post}) => {
  return (
    <div className="relative isolate flex flex-col gap-3 bg-zinc-950">
      <div className="container mx-auto max-w-screen-lg pt-32 pb-16 px-4 sm:px-6">
        <h3 className="font-bold text-4xl">{post.title}</h3>
        <p className="font-normal text-xs">
          {toLongDateString(post.createdAt)}
        </p>
        <p className="font-normal text-xs">
          {post.tags && post.tags.map(tag => `#${tag.name} `)}
        </p>
      </div>
    </div>
  )
}

export default Header