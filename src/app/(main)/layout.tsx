import css from './layout.module.scss'

import type { Metadata } from 'next'

import '@/assets/styles/tailwind/index.scss'
import '@/assets/styles/main/index.scss'

import Controller from '@/components/Controller'
import Aside from '@/components/Stars/Aside'
import History from '@/components/Stars/History'

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
    <html lang="pt-BR">
      <body>
        <Controller />
        <div id={css["app"]}>
        <Aside />
          <main className={css["main"]}>
            <div className={css["pages"]}>
              {children}
            </div>
            <History />
          </main>
        </div>
      </body>
    </html>
  )
}
