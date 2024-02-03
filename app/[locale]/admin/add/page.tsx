'use client'
import { Form } from "@/components/form"
import { postRepository } from "@/services/post"
import { Container } from "@/components/container"

const Page = () => {
  return (
    <div className="flex flex-col">
      <Container className="max-w-sm">
        <Form
          action={({slug, title, categorySlug}) => postRepository.create(categorySlug, {slug,title})}
          fields={[
            {
              id: "slug",
              label: "Slug",
              required: true
            },
            {
              id: "title",
              label: "Título",
              required: true
            },
            {
              id: "categorySlug",
              label: "Categoria",
              required: true
            }
          ]}
        />
      </Container>
    </div>
  )
}

export default Page