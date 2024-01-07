export type PageNames = 'calculadora' | 'perfil' | 'entrar'

type PagePathType = {
  [key in PageNames]: string
}

export const pagePath:PagePathType = {
  calculadora: '/calculadora',
  perfil: '/perfil',
  entrar: '/entrar',
}