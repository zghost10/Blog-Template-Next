import { readFile } from "fs/promises";
import { join } from "path";
import matter from 'front-matter';
import { IPost } from "@/types/blog";
import { readdirSync } from "fs";

const POSTS_DIR_NAME = 'content';
const EXTENSION = '.mdx';
const postsDirectory = join(process.cwd(), POSTS_DIR_NAME);

const removeExtension = (slug: string, extension = EXTENSION) => {
  return slug.replace(extension,'');
}

const posts = (locale: string) => {
  return readdirSync(join(postsDirectory, locale)).map(file => removeExtension(file))
};

//BLOG FUNCTIONS
export const getPostList = async (locale: string) => {
  let list: IPost[] = []
  posts(locale).map(async slug => {
    const post = await getPostBySlug(locale, slug);
    if(post) list.push(post)
  });
  const postList = await Promise.all(list);
  return postList;
}

export const getPostBySlug = async (locale: string, slug: string) => {
  const postPath = join(postsDirectory,locale,slug+EXTENSION);
  const post = await readFile(postPath,'utf-8')
    .then(postFile => {
      let { attributes, body } = matter(postFile);
      return {
        frontmatter: attributes,
        content: body as string,
        slug
      } as IPost
    })
    .catch(() => {
      return undefined;
    });
  return post;
}