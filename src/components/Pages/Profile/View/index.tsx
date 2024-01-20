'use strict'

import css from './style.module.scss'

import { MoreHorizontal } from "lucide-react"

import Card from "@/components/Card"
import Button from "@/components/Button/Default"

import EditOrDelete from '@/components/Popover/EditOrDelete'

interface Props {
  name: string,
  value: string,
  onClickInEdit?: () => void;
  onClickInDelete?: () => void;
}

const View = ({name, value, ...props}: Props) => {
  return (
    <div className={css["root"]}>
      <Card orientation="horizontal" className={css["profile-view"]}>
        <div className={css["content"]}>
          <p className={css["name"]}>{ name }</p>
          <p className={css["value"]}>{ value }</p>
        </div>

        <div className={css["footer"]}>
          <EditOrDelete
            onClickInEdit={props.onClickInEdit}
            onClickInDelete={props.onClickInDelete}
          >
            <Button variant='outline' icon={MoreHorizontal}/>
          </EditOrDelete>
        </div>
      </Card>
    </div>
  )
}

export default View