import { readFile, readdir } from "fs/promises";
import { extname, join } from "path";
import matter from 'front-matter';
import { IPage, IPost } from "@/types/blog";
import { readdirSync } from "fs";

const PAGES_DIR_NAME = '_pages';
const POSTS_DIR_NAME = '_posts';
const EXTENSION = '.mdx';
const pagesDirectory = join(process.cwd(), PAGES_DIR_NAME);
const postsDirectory = join(process.cwd(), POSTS_DIR_NAME);

const removeExtension = (slug: string, extension = EXTENSION) => {
  return slug.replace(extension,'');
}

export const getRoutes = readdirSync(pagesDirectory).map(file => {
  return removeExtension(file);
});

const posts = readdirSync(postsDirectory).map(file => {
  return removeExtension(file);
});

export const getPageBySlug = async (slug: string) => {
  const pagePath = join(pagesDirectory,slug+EXTENSION);
  const page = await readFile(pagePath,'utf-8')
    .then(pageFile => {
      let { attributes, body } = matter(pageFile);
      return {
        frontmatter: attributes,
        content: body as string,
        slug
      } as IPage
    })
    .catch(() => {
      console.log('Page not found!');
      return undefined;
    });
  return page;
}

//BLOG FUNCTIONS
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
        frontmatter: attributes,
        content: body as string,
        slug
      } as IPost
    })
    .catch(() => {
      console.log('Post not found!');
      return undefined;
    });
  return post;
}