'use client';
import dynamic from 'next/dynamic'
import Button from '@/components/button';
import { Suspense, useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { nameToSlug } from '@/utils/nameToSlug'
import { Container } from "@/components/container"
import { IPost } from "@/types/blog"
import { postRepository } from '@/services/post';
import { useParams, useRouter } from 'next/navigation';

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

const Page = () => {
  const router = useRouter()
  const { cat, slug } = useParams()

  //states
  const [post, setPost] = useState<IPost|null>(null);
  const [currentSlug, setCurrentSlug] = useState<string|null>(null)
  const [newAnchor, setNewAnchor] = useState<string>('');

  //helpers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    const data = await postRepository.get(cat, slug)

    if(data){
      setPost(data)
      setCurrentSlug(data.slug)
      setLoading(false)
    }
  }

  //handlers
  const handleSavePost = async (post: IPost) => {
    if(!post) return

    setLoading(true);

    let res = currentSlug ? await postRepository.update(post.categorySlug, currentSlug, post) : false

    if(res){
      setError(false);
      if(currentSlug !== post.slug) router.push(`/admin/${post.categorySlug}/${post.slug}`)
    }else{
      setError(true);
    }

    setLoading(false);
  }

  const handleSaveCategory = () => {
    
  }

  const handleSaveTag = () => {
    
  }

  useEffect(() => {
    getData()
  },[])

  return loading ? (
    <div className="flex flex-col my-24">
      <Container className="max-w-screen-md">
        Loading
      </Container>
    </div>
  ) : post ? (
    <div className="flex flex-col my-24">
      <Container className="max-w-screen-lg">
        <div className="flex flex-col gap-3 pb-20 sm:pb-0">
          <div className="sm:col-span-2 flex justify-between">
            <h4 className="font-bold text-xl">Editando Post</h4>

            <div className="flex gap-4">
              <Button
                type='button' variant='secondary-lines'
                action={() => window.open(`/${post.categorySlug}/${currentSlug}`,'_blank')}
              >
                Visitar post
              </Button>

              <Button
                type='button' variant='primary-lines'
                action={() => handleSavePost(post)}
              >
                Salvar
              </Button>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="category" className="block text-sm font-semibold leading-6">
              Categoria:
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="category"
                id="category"
                onChange={(e) => {}}
                value={post.categorySlug}
                className="block bg-gray-800 w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-ledax-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ledax-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="slug" className="block text-sm font-semibold leading-6">
              Slug:
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="slug"
                id="slug"
                onChange={(e) => setPost({...post, slug: e.target.value})}
                value={post.slug}
                className="block bg-gray-800 w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-ledax-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ledax-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="title" className="block text-sm font-semibold leading-6">
              Título da página:
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => setPost({
                  ...post,
                  title: e.target.value
                })}
                value={post.title}
                className="block bg-gray-800 w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-ledax-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ledax-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="tag" className="block text-sm font-semibold leading-6 mb-2">
              Tags:
            </label>

            <div className='flex gap-2'>
              {
                post.tags && post.tags.map((tag, key) => (
                  <span key={key} className='font-semibold text-xs flex justify-center items-center gap-2 px-1.5 py-1 bg-ledax-600 rounded-lg'>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(` id="${nameToSlug(tag.id)}"`)
                      }}
                    >
                      {tag.name}
                    </button>

                    <button 
                      className='m-0 p-0'
                      onClick={(e) => {
                        e.preventDefault()
                        
                      }}
                    >
                      <FontAwesomeIcon icon={faXmarkCircle}className='text-white w-[0.7rem] h-[0.7rem]'/>
                    </button>
                  </span>
                ))
              }
            </div>

            <div className="flex flex-col gap-2 mt-2.5">
              <input
                type="text"
                name="tag"
                id="tag"
                onKeyDown={
                  (e) => {
                    if(e.key === 'Enter'){
                      //handle save cat

                      setNewAnchor('')
                    }
                  }
                }
                onChange={
                  (e) => setNewAnchor(e.target.value)
                }
                value={newAnchor}
                placeholder="Digite o nome da âncora e tecle enter adicioná-la..."
                className="block bg-gray-800 w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-ledax-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ledax-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <label htmlFor="content" className="block text-sm font-semibold leading-6">
            Conteúdo:
          </label>
          <div id="content">
            <Suspense fallback={null}>
              <div id="content" data-color-mode="dark">
                <MDEditor 
                  id="content" 
                  height={1080} 
                  value={post.content ?? ""}
                  onChange={string => setPost({
                    ...post, content: string ?? ""
                  })}
                />
              </div>
            </Suspense>
          </div>
        </div>
      </Container>
    </div>
  ) : (
    <Container className="max-w-screen-md">
      Post not found!
    </Container>
  )
}

export default Page