'use client'
import { css } from "@emotion/css"
import { FC, useCallback, useEffect, useState } from "react"
import Link from "next/link"

type CardProps = {
  to?: string
  image?: string
  title: string
  body?: string
  height?: string
}

const Card:FC<CardProps> = ({to, image, title, body, height}) => {
  const [mounted, setMounted] = useState(false)
  const [thumb, setThumb] = useState<string|null>(null)

  useEffect(() => {
    if(image){
      setThumb(image)
    }
    setMounted(true)
  },[])

  return mounted ? (
    <Link 
      href={to ?? '#'} 
      className={`shadows ${height ?? "w-full"} `+css({
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        padding: '1.25rem',
        ...((thumb) && {
          backgroundImage: `url(${thumb})`
        }),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 -5rem 1em #000'
      })}
    >
      <div className="flex flex-col justify-end items-start h-full gap-4">
        <h6 className="font-bold text-xl truncate max-w-full">{title}</h6>
        {body && <p className="font-bold text-xs truncate text-gray-600 max-w-full">{body}</p>}
      </div>
    </Link>
  ) : <></>
}

export default Card