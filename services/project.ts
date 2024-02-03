if(!process.env.NEXT_PUBLIC_APP_URL){
  throw Error("Missing environment variable: NEXT_PUBLIC_APP_URL")
}

class ProjectRepository {
  private appUrl = process.env.NEXT_PUBLIC_APP_URL

  public get = async (slug: string, locale: "pt" | "en") => {
    const res = await fetch(`${this.appUrl}/api/project?slug=${slug}&locale=${locale}`, {
      cache: 'no-cache'
    })
    return res.ok ? await res.json() : null
  }
}

export const project = new ProjectRepository()