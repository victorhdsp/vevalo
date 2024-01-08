'use client';

import { useRouter } from 'next/router';
import { PageNames, pagePath } from '@/assets/data/sitemap';
import { useEffect } from 'react';
import { getCookie } from '@/assets/utils';
import { getUser } from '@/services/firebase/database';
import Controller from '@/components/Controller';

export default function ProfilePage() {
  // useEffect(() => {
  //   const email = getCookie('email')
  //   const hasAccount = getUser(email)
    
  //   console.log('hasAccount: ' + hasAccount)

  //   if (hasAccount) {
  //     window.location.href = pagePath['perfil']
  //   } else {
  //     window.location.href = pagePath['entrar']
  //   }
  // }, [])
  return <><Controller/></>
}
