import { prisma } from "@/lib/prisma"
import { Post } from "@/prisma/client"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get("category")
  const slug = searchParams.get("slug")

  try {
    let res: Post | Post[] | null = null

    if(slug && category){
      res = await prisma.post.findUnique({
        where: {
          slug,
          categorySlug: category
        },
        include: {
          category: true,
          tags: true
        }
      })
      return NextResponse.json(res)
    }else{
      res = await prisma.post.findMany({
        orderBy: {
          createdAt: "desc"
        },
        include: {
          tags: true
        }
      })
      return NextResponse.json(res)
    }
  } catch (error: any) {
    throw Error(error??"An error ocurred while trying to get a Post!")
  }
}

export const POST = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get("category")

  const { slug, title, content, cover } = await req.json()

  try {
    if(!category) throw Error("Missing post slug!")

    const res = await prisma.post.create({
      data: {
        slug, title, content, cover,
        categorySlug: category
      }
    })
    return NextResponse.json(res)
  } catch (error: any) {
    throw Error(error ?? "An error ocurred while trying to create a Post!")
  }
}

export const PATCH = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get("category")
  const postSlug = searchParams.get("slug")
  const { slug, title, content, cover } = await req.json()

  try {
    if(!category) throw Error("Missing post category slug!")
    if(!postSlug) throw Error("Missing post slug!")

    const res = await prisma.post.update({
      where: {
        categorySlug: category,
        slug: postSlug
      },
      data: {
        ...(slug && {slug}),
        ...(title && {title}),
        ...(content && {content}),
        ...(cover && {cover})
      }
    })
    return NextResponse.json(res)
  } catch (error) {
    throw Error("An error ocurred while trying to update a Post!")
  }
}

export const DELETE = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get("slug")

  try {
    if(!slug) throw Error("Missing post slug!")

    const res = await prisma.post.delete({
      where: {
        slug
      }
    })
    return NextResponse.json(res)
  } catch (error) {
    throw Error("An error ocurred while trying to delete a post!")
  }
}