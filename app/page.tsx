import Card from "@/components/card";
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

    <Container className="my-[2rem]">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="md:row-span-2 md:col-span-2 rounded-md">
            <Card
              to="/programming/nuxt"
              title="Curabitur egestas nisi in convallis aliquam"
              body="Proin eu diam quis augue fringilla congue. Quisque rutrum dictum augue, vel iaculis massa viverra fermentum."
              image="https://d2jq2hx2dbkw6t.cloudfront.net/795/nuxt3-5.jpg"
              height="h-[22rem]"
            />
          </div>

          <Card
            to="/programming/vercel"
            title="Donec vulputate finibus dolor faucibus cursus"
            body="Praesent gravida nunc enim, sed hendrerit ipsum consectetur id. Nam volutpat sodales consequat. Morbi non augue sed nisi sodales placerat."
            image="https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/FNi8e5QAED0ZtSl5uqBxe/c954730ed2f7aedfa8f83181e8bf0efb/AI-1.png"
            height="h-[22rem] lg:h-[11rem]"
          />

          <Card
            to="/programming/nest"
            title="Aliquam erat volutpat"
            body='Etiam facilisis risus turpis, ullamcorper consectetur ligula finibus sit amet.'
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSftL3emsflICWM1TAM0lmxWiPES69QVibsNeQxsHuVSEJn1766MatURCEIQi1HoszPMyU&usqp=CAU"
            height="h-[22rem] lg:h-[11rem]"
          />
        </div>
      </div>
    </Container>
  </>
}
export default Page;