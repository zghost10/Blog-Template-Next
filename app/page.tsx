import { Container } from "@/components/container";
import { getPostList } from "@/lib/blog";
import { IPost } from "@/types/blog";

const Page = async () => {
  const posts = await getPostList();

  const PostList = () => {
    if(posts){
      return posts.map((post, key) => {
        if(post){
          let { frontmatter } = post;
          return (
            <div key={key} className="flex flex-col py-4">
              <h5>{frontmatter.title}</h5>
              <h6>{frontmatter.description}</h6>
            </div>
          )
        }
      })
    }else{
      return <>no posts</>
    }
  }

  return <>
    <title>Home - Blog</title>

    <Container>
      <article className="prose lg:prose-xl dark:prose-invert">
        <h3>Blog home</h3>

        <div className="grid grid-cols-1 divide-y">
          <h4>Posts</h4>
          <PostList/>
        </div>
      </article>
    </Container>
  </>
}
export default Page;