import Link from 'next/link'
import css from './style.module.scss'

import { PageNames, pagePath } from '@/assets/data/sitemap'

type Props = {
  label: string
  page: PageNames
  icon: React.ElementType
}

const ItemAside = (props: Props) => {
  const Icon = props.icon
  
  return (
    <li>
      <Link href={pagePath[props.page]} className={css["item-aside"]}>
        <span className={css["icon"]}><Icon /></span>
        <span className={css["label"]}>{ props.label }</span>
      </Link>
    </li>
  )
}

export default ItemAside;