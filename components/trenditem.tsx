import Icon from "@/components/icon";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FC } from "react";

export type Trend = {
  slug?: string
  title: string
}

type Props = {
  trend: Trend
}

export const TrendItem: FC<Props> = ({trend}) => {
  return (
    <Link href={trend?.slug??"#"} className="flex gap-3">
      <Icon icon={faCircleArrowRight} className="w-[1.2rem] h-[1.2rem] text-coffee-400"/>
      {trend.title}
    </Link>
  )
}