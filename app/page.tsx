import { Container } from "@/components/container";
import { PostCard } from "@/components/post-card";
import { getPostList } from "@/lib/blog";

const Page = async () => {
  const posts = await getPostList();

  const PostList = () => {
    if(posts){
      return posts.map((post, key) => {
        if(post){
          return (
            <PostCard key={key} post={post}/>
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