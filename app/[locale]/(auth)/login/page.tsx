'use client'
import { Container } from "@/components/container";
import { Form } from "@/components/form";
import logo from '@/app/icon.svg';
import Link from 'next/link';
import { user } from "@/services/user";

export default async function Page () {
  return (
    <>
      <title>Login - Interno - Ledax Energia</title>

      <Container className="h-full">
        <div className='flex flex-col justify-center items-center h-full gap-24'>
          <Link href='/' className='flex flex-col justify-center items-center'>
            <img className="my-[-5rem] h-[12rem]" src={logo.src} alt="" />
          </Link>

          <Form
            action={({username, password}) => user.login(username, password)}
            type="login"
            fields={[
              {
                id: 'username',
                label: 'Usuário',
                required: true
              },
              {
                id: 'password',
                label: 'Senha',
                type: 'password',
                required: true
              }
            ]}
          />
        </div>
      </Container>
    </>
  )
}