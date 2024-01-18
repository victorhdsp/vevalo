'use strict'

import css from './style.module.scss'

import { MoreHorizontal } from "lucide-react"

import Card from "@/components/Card"
import Button from "@/components/Button/Default"

import { makeFinance } from "@/assets/utils/number"

interface Props {
  name: string,
  value: string
}

const CollaboratorView = ({name, value}: Props) => {
  return (
    <div className={css["root"]}>
      <Card orientation="horizontal" className={css["calculator-view"]}>
        <div className={css["content"]}>
          <p className={css["name"]}>{ name }</p>
          <p className={css["value"]}>{ value }</p>
        </div>

        <div className={css["footer"]}>
          <Button variant='outline' icon={MoreHorizontal}/>
        </div>
      </Card>
    </div>
  )
}

export default CollaboratorView