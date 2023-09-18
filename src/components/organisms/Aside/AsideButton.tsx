import css from './style.module.scss'

import { ElementType } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { Button } from "@/components/ui/button"
import { SystemPages, setCurrentPage } from '@/redux/manager/slice'
import { RootState } from '@/redux/store'

interface Props {
  icon: ElementType
  label: string
  name: SystemPages
}

export const AsideButton = ({icon:Icon, label, name}: Props) => {
  const currentPage = useSelector((rootReducer: RootState) => rootReducer.managerReducer.system.currentPage)
  const dispatch = useDispatch()

  const handleChangePage = () => {
    dispatch(setCurrentPage(name))
  }

  return (
    <Button 
      variant="ghost" 
      className={`
        ${css["AsideButton"]}
        ${currentPage === name && css["active"]}
      `}
      onClick={handleChangePage}
      title={label}
      name={name}
    >
      <div>
        <Icon className="w-6 h-6" />
      </div>
      <p className={css["label"]}>
        { label }
      </p>
    </Button>
  )
}