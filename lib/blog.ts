import { readFile, readdir } from "fs/promises";
import { extname, join } from "path";
import matter from 'front-matter';
import { IPost } from "@/types/blog";
import { readdirSync } from "fs";

const POSTS_DIR_NAME = 'posts';
const EXTENSION = '.mdx';
const postsDirectory = join(process.cwd(), POSTS_DIR_NAME);

const removeExtension = (slug: string, extension = EXTENSION) => {
  return slug.replace(extension,'');
}

const posts = readdirSync(postsDirectory).map(file => {
  return removeExtension(file);
});

export const getPostList = async () => {
  let list = posts.map(async slug => {
    const post = await getPostBySlug(slug);
    return post;
  });
  const postList = await Promise.all(list);
  return postList;
}

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
    .catch(() => {
      console.log('Post not found!');
      return undefined;
    });
  return post;
}