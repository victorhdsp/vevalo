import css from './style.module.scss'

import History from "@/components/organisms/History"
import { HomeCalcule } from '@/components/organisms/HomeCalcule'

export const Home = () => {
  return (
    <div className={css["home"]}>
      {/* <Form /> */}
      <HomeCalcule />
      <History />
    </div>
  )
}