A [Next.js](https://nextjs.org/) and [Tailwindcss](https://tailwindcss.com/) based blog starter

# Ultimate Nextjs Blog Starter

## See a demonstration
[See demo](https://ultimate-blog-starter-nextjs.netlify.app/)

[![Project Status](https://api.netlify.com/api/v1/badges/d6d72de7-dd11-47c1-ba5f-704852f56ee0/deploy-status)](https://ultimate-blog-starter-nextjs.netlify.app/)

![Screenshoot](https://caroso-dev.s3.amazonaws.com/projects/blog-template/blog-idea.png)

## #Pages
The page files goes in: `./_pages` using `.mdx` extension.

## #Posts
The post files are stored in: `./_posts` also using `.mdx` extension.

***Once created a new page - manually - an option must be added to the `./_data/navbar.json`.**

**Cards are automatically generated for each post on the home page.**

This project uses typescript so the post front matter fields must be added to the IPost interface in `./types/blog`.