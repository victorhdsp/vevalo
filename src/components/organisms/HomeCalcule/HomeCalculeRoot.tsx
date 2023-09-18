import css from './style.module.scss';

interface Props {
  children: React.ReactNode
}

export const HomeCalculeRoot = ({children}: Props) => {
  return (
    <section className={css["HomeCalculeRoot"]}>
      { children }
    </section>
  )
}