import { prisma } from "@/lib/prisma"
import { Category } from "@prisma/client"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get("slug")

  try {
    let res: Category | Category[] | null = null

    if(slug){
      res = await prisma.category.findUnique({
        where: {
          slug
        },
        include: {
          posts: {
            include: {
              tags: true
            }
          }
        }
      })
    }else{
      res = await prisma.category.findMany({
        orderBy: {
          createdAt: "desc"
        },
        include: {
          posts: {
            include: {
              tags: true
            }
          }
        }
      })
    }

    return NextResponse.json(res)
  } catch (error) {
    throw Error("An error ocurred while trying to find a category!")
  }
}

export const POST = async (req: Request) => {
  const { slug, name } = await req.json()

  try {
    if(!slug || !name) throw Error("Missing category slug!")

    const res = await prisma.category.create({
      data: {
        name,
        slug
      }
    })

    return NextResponse.json(res)
  } catch (error) {
    throw Error("An error ocurred while trying to create a category!")
  }
}

export const PATCH = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("slug")
  const { slug } = await req.json()

  try {
    if(!id || !slug) throw Error("Missing category slug!")

    const res = await prisma.category.update({
      where: {
        slug: id
      },
      data: {
        slug
      }
    })

    return NextResponse.json(res)
  } catch (error) {
    throw Error("An error ocurred while trying to update a category!")
  }
}

export const DELETE = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get("slug")

  try {
    if(!slug) throw Error("Missing category slug!")

    const res = await prisma.category.delete({
      where: {
        slug
      }
    })

    return NextResponse.json(res)
  } catch (error) {
    throw Error("An error ocurred while trying to delete a category!")
  }
}