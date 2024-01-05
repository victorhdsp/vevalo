'use client'

import { PageNames } from '@/assets/data/sitemap'
import css from '../style.module.scss'

import Avatar from '@/components/Avatar'
import IconLogo from '@/components/Icon/Logo'
import { useMenu } from '@/store/Menu'

const AsideMenu = () => {
  const EnterOnOtherPage = useMenu(store => store.EnterOnOtherPage)

  const template = (label:string, page:PageNames, children?: React.ReactNode) => (
    <li 
      onClick={() => EnterOnOtherPage(page)} 
      className={css["aside-item"]}
      key={page}
    >
      <span className={css["children"]}>{ children }</span>
      <span className={css["label"]}>{ label }</span>
    </li>
  )

  const menuItems = [
    () => template(
      'Perfil', 
      'profile', 
      <Avatar />
    ),
    // () => template(
    //   'Serviços', 
    //   'services',
    //   <IconButton variant='invisible' icon={ShoppingBag} size='none' />
    // ),
  ]

  return (
    <>
      <li 
        onClick={() => EnterOnOtherPage('dashboard')} 
        className={`${css["dashboard-aside-item"]} ${css["aside-item"]}`}
      >
        <span className={css["children"]}>
          <IconLogo />
        </span>
        <span className={css["label"]}>
          GET-VALUE
        </span>
      </li>
      { menuItems.map((item) => (item())) }
    </>
  );
}

export default AsideMenu;