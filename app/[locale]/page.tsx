import Button from "@/components/button";
import { Container } from "@/components/container";
import { PostCard } from "@/components/postcard";
import { Trend, TrendItem } from "@/components/trenditem";
import { IPost } from "@/types/blog";
import { NextPage } from "next";

type PageProps = {
  params: {
    locale: string
    page: string;
  }
}

const Page: NextPage<PageProps> = async ({params}) => {
  const list: IPost[] = []
  const trends: Trend[] = []
  const trendingTags: String[] = []

  return <>
    <title>Page not found! - Blog</title>

    <Container className="my-32">
      <h2 className="font-bold text-3xl text-coffee-500 mb-8">
        Publicado recentemente
      </h2>

      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-10">
        <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {
            list && list.length > 0 ?
            list.map((post, key) => post && <PostCard key={key} post={post}/>) :
            <p>Ops! Ainda não há nenhuma publicação.</p>
          }
        </div>

        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-2xl text-coffee-400">
              Contrate-nos!
            </h4>

            <p className="font-normal text-md">
              Nós criamos aplicações <span className="text-coffee-400">ágeis</span> e <span className="text-coffee-400">responsivas</span>, websites extremamente <span className="text-coffee-400">rápidos</span>, <span className="text-coffee-400">{`API's`}</span> escaláveis e em diversos padrões.
            </p>

            <p className="font-normal text-md text-coffee-600 animate-pulse">
              Trabalhe conosco!
            </p>

            <div className="flex">
              <Button 
                href={`https://caroso.dev/${params.locale}/contact`}
                type="link" 
                variant="primary"
                bold
              >
                {params.locale === 'pt' ? 'Descubra como!' : 'Get in touch!'}
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-2xl text-coffee-400">
              Mais acessados
            </h4>

            {
              (trends && trends.length > 0) ?
              trends.map((trend, key) => (
                <TrendItem key={key} trend={trend}/>
              )) : (
                <p className="font-normal text-xs">Ops! Ainda não há nada aqui.</p>
              )
            }
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-2xl text-coffee-400">
              Tags mais acessadas
            </h4>

            {
              (trendingTags && trendingTags.length > 0) ?
              trendingTags.map((tag, key) => (
                <span key={key} className={`font-normal text-xs bg-zinc-700 px-1.5 py-1 mr-1 rounded-full`}>
                  {tag}
                </span>
              )) : (
                <p>Ops! Ainda não há nada aqui.</p>
              )
            }
          </div>
        </div>
      </div>
    </Container>
  </>
}
export default Page;