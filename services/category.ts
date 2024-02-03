if(!process.env.NEXT_PUBLIC_APP_URL){
  throw Error("Missing environment variable: NEXT_PUBLIC_APP_URL")
}

class CategoryRepository {
  private repoName = "category"
  private appUrl = process.env.NEXT_PUBLIC_APP_URL

  public get = async (slug?: string) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}${slug?`?slug=${slug}`:""}`)
    return await res.json() ?? null
  }

  public create = async (
    data: {
      slug: string
    }
  ) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}`, {
      method: "POST",
      body: JSON.stringify(data)
    })
    return await res.json() ?? null
  }

  public update = async (
    slug: string,
    data: {
      slug: string
    }
  ) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}?slug=${slug}`, {
      method: "PATCH",
      body: JSON.stringify(data)
    })
    return await res.json() ?? null
  }

  public delete = async (
    slug: string
  ) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}?slug=${slug}`, {
      method: "DELETE"
    })
    return await res.json() ?? null
  }
}

export const categoryRepository = new CategoryRepository()