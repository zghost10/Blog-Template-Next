import Image from "next/image"
import Icon from "@/components/icon";
import Link from "next/link"
import { FC } from "react"
import { now } from "@/utils/now";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IPost } from "@/types/blog";

type CardProps = {
  post: IPost
}

export const PostCard: FC<CardProps> = ({post}) => {
  return (
    <Link
      href={post.slug??"#"}
      className="flex flex-col p-4 gap-6 rounded-md bg-stone"
    >
      <div className="flex gap-4 w-full">
        <div className="flex items-center justify-center">
          <Image width={36} height={36} className="rounded-full" src="https://avatars.githubusercontent.com/u/55406773?v=4" alt="rafael-caroso" />
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-xs text-gray-400">Date</p>
          <p className="font-bol">Rafael Caroso</p>
        </div>
      </div>

      <div className="flex flex-col text-start gap-4">
        <h4 className="font-bold text-2xl text-coffee-400">
          {post.frontmatter.title}
        </h4>
        <p className="text-sm">
          {post.frontmatter.description}
        </p>
      </div>

      <div className="text-start gap-3 w-full">
        {
          post.frontmatter.tags.map((badge, key) => (
            <span key={key} className={`font-semibold text-xs bg-zinc-700 px-1.5 py-1 mr-1 rounded-full`}>
              {badge}
            </span>
          ))
        }
      </div>

      <div className="flex items-center justify-start gap-2">
        <Icon icon={faCircleArrowRight} className="w-[1.4rem] h-[1.4rem] text-coffee-400"/>
        <p className="font-semibold text-md">Ver mais</p>
      </div>
    </Link>
  )
}