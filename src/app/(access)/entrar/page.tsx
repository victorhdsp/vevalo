'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/Button/Default';
import css from './style.module.scss'

import Input from '@/components/Input';

import { useState } from 'react';

import { loginGoogle } from '@/assets/utils/firebase/auth'
import { userRegister } from '@/app/(access)/entrar/actions'

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmitToLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const registed = await userRegister(email)
    if (registed) router.push('/')
  }

  // const handleGoogleLogin = () => {
  //   loginGoogle()
  // }

  return (
    <>
      <main className={css["login"]}>
        <h1>Bem vindo ao GET-VALUE</h1>
        <form onSubmit={handleSubmitToLogin}>
          <Input 
            name='email' 
            label='E-mail' 
            type='email' 
            required
            onInput={setEmail}
          />
          {/* <Input 
            name='password' 
            label='Senha' 
            type='password' 
            required
            onInput={setPassword}
          /> */}
          <Button type="submit">Entrar</Button>
        </form>

        {/* <Button 
          variant="secondary"
          onClick={handleGoogleLogin}
        >
          Entrar com o google
        </Button> */}
      </main>
    </>
  )
}
