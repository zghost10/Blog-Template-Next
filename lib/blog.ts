import { readFile } from "fs/promises";
import { join } from "path";

const POSTS_DIR_NAME = 'posts';
const EXTENSION = '.mdx';
const postsDirectory = join(process.cwd(), POSTS_DIR_NAME);

export const getPostBySlug = async (slug: string) => {
  const postPath = join(postsDirectory,slug+EXTENSION);
  const postContent = await readFile(postPath,'utf-8').catch(() => false);
  return postContent;
}