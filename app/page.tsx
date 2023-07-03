import { Container } from "@/components/container";
import { PostCard } from "@/components/post-card";
import { getPostList } from "@/lib";
import Link from "next/link";

const Page = async () => {
  const posts = await getPostList();

  const PostList = () => {
    if(posts && posts.length !== 0){
      return posts.map((post, key) => {
        if(post){
          return (
            <PostCard key={key} post={post}/>
          )
        }
      })
    }else{
      return <article className="prose lg:prose-xl dark:prose-invert">
        <h3>No posts to show!</h3>

        But you can access the <Link href="/admin">admin panel</Link> to add some.
      </article>
    }
  }

  return <>
    <title>Home - Blog</title>

    <Container>
      <div className="flex flex-col">
        <h3 className="font-bold text-3xl text-center">Blog Home</h3>

        <div className="grid grid-cols-1 gap-3">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-2xl">Posts</h4>
            <hr className="h-px bg-gray-300 dark:bg-zinc-900 border-0 rounded-lg"></hr>
          </div>

          <PostList/>
        </div>
      </div>
    </Container>
  </>
}
export default Page;