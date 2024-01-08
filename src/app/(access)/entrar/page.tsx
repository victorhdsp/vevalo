'use client';

import css from './style.module.scss'
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/components/Button/Default';
import Input from '@/components/Input';

import { loginGoogle } from '@/services/firebase/auth'
import { userRegister } from '@/app/(access)/entrar/actions'
import { User } from 'firebase/auth';
import { getUser } from '@/services/firebase/database';

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const hasRegisted = async (currentUser: User) => {
    let registed = await getUser()
    
    if (!registed) {
      registed = await userRegister(currentUser)
    }
  
    if (registed) {
      router.push('/perfil')
    }
  }

  const handleSubmitToLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // await hasRegisted(currentUser)
  }

  const handleGoogleLogin = async () => {
    const userHasConnected = await loginGoogle()
    
    if (userHasConnected && userHasConnected.email) {
      await hasRegisted(userHasConnected)
      
    }
  }

  return (
    <>
      <main className={css["login"]}>
        <h1>Bem vindo ao GET-VALUE</h1>
        <form onSubmit={handleSubmitToLogin}>
          {/* <Input 
            name='email' 
            label='E-mail' 
            type='email' 
            required
            onInput={setEmail}
          /> */}
          {/* <Input 
            name='password' 
            label='Senha' 
            type='password' 
            required
            onInput={setPassword}
          /> */}
          {/* <Button type="submit">Entrar</Button> */}
        </form>

        <Button 
          variant="secondary"
          onClick={handleGoogleLogin}
        >
          Entrar com o google
        </Button>
      </main>
    </>
  )
}
