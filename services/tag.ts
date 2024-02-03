if(!process.env.APP_URL){
  throw Error("Missing environment variable: APP_URL")
}

class TagRepository {
  private repoName = "tag"
  private appUrl = process.env.APP_URL

  public get = async (id?: string) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}${id?`?id=${id}`:""}`)
    return await res.json() ?? null
  }

  public create = async (
    data: {
      name: string
    }
  ) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}`, {
      method: "POST",
      body: JSON.stringify(data)
    })
    return await res.json() ?? null
  }

  public update = async (
    id: string,
    data: {
      id: string, 
      name: string
    }
  ) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}?id=${id}`, {
      method: "PATCH",
      body: JSON.stringify(data)
    })
    return await res.json() ?? null
  }

  public delete = async (
    id: string
  ) => {
    const res = await fetch(`${this.appUrl}/api/${this.repoName}?id=${id}`, {
      method: "DELETE"
    })
    return await res.json() ?? null
  }
}

export const tagRepository = new TagRepository()