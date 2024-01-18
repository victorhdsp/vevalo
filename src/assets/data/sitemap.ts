export type PageNames = 
  'calculadora' | 
  'perfil' | 
  'historico' |
  'entrar' |
  'sair'

type PagePathType = {
  [key in PageNames]: string
}

export const pagePath:PagePathType = {
  calculadora: '/calculadora',
  perfil: '/perfil',
  entrar: '/entrar',
  historico: '/historico',
  sair: '/sair'
}