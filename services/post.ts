import { IPost } from "@/types/blog"

if(!process.env.NEXT_PUBLIC_APP_URL){
  throw Error("Missing environment variable: NEXT_PUBLIC_APP_URL")
}

type Get = (cat?: string, slug?: string) => any

class PostRepository {
  private repoName = "post"
  private appUrl = process.env.NEXT_PUBLIC_APP_URL
  private config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache"
  }

  public get: Get = async (cat, slug) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}${cat && slug ?`?category=${cat}&slug=${slug}`:""}`, this.config)
    return res ? await res.json() : null
  }

  public create = async (
    categorySlug: string,
    data: {
      slug: string, 
      title: string, 
      content?: string, 
      cover?: string
    }
  ) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}?category=${categorySlug}`, {
      ...this.config,
      method: "POST",
      body: JSON.stringify(data)
    })
    return await res.json() ?? null
  }

  public update = async (
    category: string,
    slug: string,
    data: IPost
  ) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}?category=${category}&slug=${slug}`, {
      ...this.config,
      method: "PATCH",
      body: JSON.stringify(data)
    })
    return await res.json() ?? null
  }

  public delete = async (
    slug: string
  ) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}?slug=${slug}`, {
      ...this.config,
      method: "DELETE"
    })
    return await res.json() ?? null
  }
}

export const postRepository = new PostRepository()