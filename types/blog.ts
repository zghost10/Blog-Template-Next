export interface IPost {
  frontmatter: {
    title: string;
    description: string;
    category: string;
    cover: string;
    tags: string[]
    modified: Date;
    created: Date;
  }
  content: string;
  slug: string
}