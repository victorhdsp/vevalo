'use client';

import Button from '@/components/Button/Default';
import css from './style.module.scss'

import Input from '@/components/Input';
import { FormEvent, useState } from 'react';
import { useCurrentProfile } from '@/store/currentProfile';

import { loginGoogle, loginUser } from '@/assets/utils/firebase/auth'

export default function Home() {
  const currentProfile = useCurrentProfile(({email, setEmail}) => ({email, setEmail}))
  const [email, setEmail] = useState(currentProfile.email)
  const [password, setPassword] = useState('')

  const handleSubmitToLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    loginUser(email, password)
  }

  const handleGoogleLogin = () => {
    loginGoogle()
  }

  return (
    <>
      <main className={css["login"]}>
        <h1>Bem vindo ao GET-VALUE</h1>
        {/* <form onSubmit={handleSubmitToLogin}>
          <Input 
            name='email' 
            label='E-mail' 
            type='email' 
            required
            onInput={setEmail}
          />
          <Input 
            name='password' 
            label='Senha' 
            type='password' 
            required
            onInput={setPassword}
          />
          <Button type="submit">Entrar</Button>
        </form> */}

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
