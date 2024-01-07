import css from './layout.module.scss'

import type { Metadata } from 'next'

import '@/assets/styles/tailwind/index.scss'
import '@/assets/styles/main/index.scss'

import Controller from '@/components/Controller'

export const metadata: Metadata = {
  title: 'Get-value',
  description: 'Um app para gerenciar seus orçamentos de serviços e te ajudar a converter mais clientes.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Controller />
      <div id={css["app"]}>
        {children}
      </div>
    </>
  )
}
