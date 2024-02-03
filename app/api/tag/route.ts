import { prisma } from "@/lib/prisma"
import { Tag } from "@prisma/client"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  try {
    let res: Tag | Tag[] | null = null

    if(id){
      res = await prisma.tag.findFirst({
        where: {
          id
        }
      })
    }else{
      res = await prisma.tag.findMany()
    }

    return NextResponse.json(res)
  } catch (error) {
    throw Error("An error ocurred while trying to get a tag!")
  }
}

export const POST = async (req: Request) => {
  const { name } = await req.json()

  try {
    if(!name) throw Error("Missing tag name!")

    const res = await prisma.tag.create({
      data: {
        name
      }
    })

    return NextResponse.json(res)
  } catch (error) {
    throw Error("An error ocurred while trying to create a post tag!")
  }
}

export const PATCH = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const tagId = searchParams.get("id")
  const { name } = await req.json()

  try {
    if(!tagId) throw Error("Missing tag id!")

    const res = await prisma.tag.update({
      where: {
        id: tagId
      },
      data: {
        name
      }
    })

    return NextResponse.json(res)
  } catch (error) {
    throw Error("An error ocurred while trying to update a post tag!")
  }
}

export const DELETE = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  try {
    if(!id) throw Error("Missing tag id!")

    const res = await prisma.tag.delete({
      where: {
        id
      }
    })

    return NextResponse.json(res)
  } catch (error) {
    throw Error("An error ocurred while trying to delete a post!")
  }
}