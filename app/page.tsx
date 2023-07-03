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
        <h3 className="text-center">Blog Home</h3>

        <div className="grid grid-cols-1">
          <h4>Posts</h4>
          <hr className="h-px bg-gray-300 dark:bg-zinc-900 border-0 rounded-lg"></hr>
          <PostList/>
        </div>
      </article>
    </Container>
  </>
}
export default Page;