import { readFile } from "fs/promises";
import { join } from "path";
import matter from 'front-matter';
import { IPost } from "@/types/blog";

const POSTS_DIR_NAME = 'posts';
const EXTENSION = '.mdx';
const postsDirectory = join(process.cwd(), POSTS_DIR_NAME);

export const getPostBySlug = async (slug: string) => {
  const postPath = join(postsDirectory,slug+EXTENSION);
  const post = await readFile(postPath,'utf-8')
    .then(postFile => {
      let { attributes, body } = matter(postFile);
      return {
        frontmatter: attributes as IPost,
        content: body as string
      }
    })
    .catch(() => console.log('Post not found!'));
  return post;
}