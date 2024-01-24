<div style="display: flex; justify-content: center; align-items: center; gap: 8px; margin-block: 6rem;">
  <a href="http://nextjs.org/" target="blank"><img src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" width="60" alt="Nest Logo" /></a>
  <h2>+</h2>
  <a href="http://reactjs.dev/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="60" alt="React Logo" /></a>
  <h2>+</h2>
  <a href="http://tailwindcss.com/" target="blank"><img src="https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu" width="60" alt="Tailwind" /></a>
  <h2>+</h2>
  <a href="https://netlify.com/" target="blank"><img src="https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png" width="60" alt="Netlify logo" /></a>
</div>

<p align="center">This a demonstration of my skills. You can see other projects by <a href="http://caroso.dev" target="_blank">clicking here</a>, there you'll be able to see clearly which skills was used to build each one.</p>

## Description

Challenge: To build a minimalist Blog Template using Next.js on server-side, React.js on client-side.

## Demonstration
Click below to access the preview!

[![Project Status](https://api.netlify.com/api/v1/badges/d6d72de7-dd11-47c1-ba5f-704852f56ee0/deploy-status)](https://ultimate-blog-starter-nextjs.netlify.app/)

### Home page
<img src="https://caroso-dev.s3.amazonaws.com/projects/blog-template/blog-home.png" alt="home"/>

### Post page
<img src="https://caroso-dev.s3.amazonaws.com/projects/blog-template/blog-vercel.png" style="margin-bottom: 2rem;" alt="result"/>

## Pages
The page files goes in: `./_pages` using `.mdx` extension.

## Posts
The post files are stored in: `./_posts` also using `.mdx` extension.

***Once created a new page - manually - an option must be added to the `./_data/navbar.json`.**

**Cards are automatically generated for each post on the home page.**

This project uses typescript so the post front matter fields must be added to the IPost interface in `./types/blog`.

## Commands
All Javascript stack in this project uses Yarn as package manager, so once in the project dir, you should use the commands bellow:

```bash
# Development
$ yarn dev

# Production
$ yarn build
$ yarn start
```