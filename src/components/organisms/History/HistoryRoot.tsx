import css from './style.module.scss';

interface Props {
  children: React.ReactNode
}

export const HistoryRoot = ({children}: Props) => {
  return (
    <div className={css["HistoryRoot"]}>
      { children }
    </div>
  )
}