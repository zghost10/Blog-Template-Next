export interface IPost {
  frontmatter: {
    title: string;
    description: string;
    category: string;
    modified: Date;
    created: Date;
  }
  content: string;
  slug: string
}