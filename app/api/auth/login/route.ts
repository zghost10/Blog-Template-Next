import { prisma } from "@/lib/prisma"
import { badRequest, notFound, unAuthorized } from "@/utils/responses"
import { compareSync } from "bcryptjs"
import dayjs from "dayjs"
import { sign } from "jsonwebtoken"
import { NextResponse } from "next/server"

if(!process.env.APP_KEY){
  throw Error("Missing environment variable: `APP_KEY`")
}

const appKey = process.env.APP_KEY

export const POST = async (req: Request) => {
  const { username, password } = await req.json()

  if(username && password) {
    const user = await prisma.user.findUnique({
      where: {
        username
      }
    })

    if(user){
      const match = compareSync(password, user.password)

      if(match){
        const token = sign({
          username: user.username,
        }, appKey)

        await prisma.user.update({
          where: {
            id: user.id
          },
          data: {
            token
          }
        })

        const res = NextResponse.json({})

        res.cookies.set("CAROSO_TOKEN", token, {
          secure: process.env.NODE_ENV !== "development",
          httpOnly: true,
          expires: dayjs().add(7, "days").toDate(),
        })

        return res
      }else{
        unAuthorized()
      }
    }else{
      notFound()
    }
  }else{
    badRequest()
  }
}