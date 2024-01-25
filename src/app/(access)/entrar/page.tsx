'use client';

import css from './style.module.scss'
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/components/Button/Default';
import Input from '@/components/Form/Input';
import Logo from '@/components/Icon/Logo';

import { loginGoogle } from '@/services/firebase/auth'
import { getUserData } from '@/services/firebase/database';
import { userRegister } from '@/app/(access)/entrar/actions'
import { User } from 'firebase/auth';

import { useUser } from '@/store/User';

export default function Home() {
  const updateProfile = useUser(store => store.updateProfile)
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const hasRegisted = async (currentUser: User) => {
    let registed = await getUserData()
    
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

  const handleAnonymousLogin = async () => {
    updateProfile('email', 'anonymous@anonymous.com')
    router.push('/perfil')
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
        <div className={css["header"]}>
          <h1>Bem vindo</h1>
          <Logo type='default' />
        </div>

        <div className={css["footer"]}>
          <Button 
            variant="secondary"
            onClick={handleAnonymousLogin}
          >
            Entrar anonimamente
          </Button>

          {/* <Button 
            variant="primary"
            onClick={handleGoogleLogin}
          >
            Entrar com o google
          </Button> */}
        </div>
      </main>
    </>
  )
}
