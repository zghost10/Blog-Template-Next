'use client'
import { css } from "@emotion/css"
import { FC } from "react"

type Props = {
  frontmatter: any
}

const Header: FC<Props> = ({frontmatter}) => {
  return (
    <div
      className={
        "relative isolate flex flex-col gap-3 " + 
        css({
          "&:before": {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            opacity: 0.5,
            backgroundImage: `url(${frontmatter.cover})`,
            backgroundSize: 'cover',
          }
        })
      }
    >
      <div className="container mx-auto max-w-screen-md p-14">
        <h3 className="font-bold text-4xl">{frontmatter?.title}</h3>
        <p className="font-normal text-xs">
          {frontmatter.created.toString()}
        </p>
        <p className="font-normal text-xs">
          #{frontmatter.category}
        </p>
      </div>
    </div>
  )
}

export default Header