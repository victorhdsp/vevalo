import css from './style.module.scss'

interface Props {
  children: React.ReactNode
}

export const AsideRoot = ({ children }: Props) => {
  return (
    <aside className={css["AsideRoot"]}>
      <menu>
        { children }
      </menu>
    </aside>
  )
}