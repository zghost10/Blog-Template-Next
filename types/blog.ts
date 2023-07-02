export interface IPost {
  frontmatter: {
    title: string;
    description: string;
    modified: Date;
    created: Date;
  }
  content: string;
  slug: string
}