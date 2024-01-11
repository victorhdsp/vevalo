import css from './layout.module.scss'

import type { Metadata } from 'next'

import '@/assets/styles/tailwind/index.scss'
import '@/assets/styles/main/index.scss'

import ControllerMain from '@/components/Controller/Main'
import Aside from '@/components/Aside'
import History from '@/components/History'

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
      <ControllerMain />
      <Aside />
      <main className={css["main"]}>
        <div className={css["pages"]}>
          {children}
        </div>
        <History />
      </main>
    </>
  )
}
