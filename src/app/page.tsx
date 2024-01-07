'use client';

import { useRouter } from 'next/router';
import { PageNames, pagePath } from '@/assets/data/sitemap';
import { useEffect } from 'react';

export default function ProfilePage() {
  const home:PageNames = "entrar"

  useEffect(() => {
    window.location.href = pagePath[home]
  }, [])
  return <></>
}
