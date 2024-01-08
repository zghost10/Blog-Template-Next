import { FC, createElement } from 'react'
import { IconType } from 'react-icons'

type TIcon = {
  icon: IconType
  className?: string
}

export const Icon: FC<TIcon> = ({icon, className}) => {
  return createElement(icon, {
    className: className ?? "w-[1.2rem] h-[1.2rem]"
  })
}