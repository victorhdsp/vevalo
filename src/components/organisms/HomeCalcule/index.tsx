import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import homecalcule from './Composer'

import { HomeCalculeForm } from './HomeCalculeForm'
import { HomeCalculeConfig } from './HomeCalculeConfig'

export interface HomeCalculeStages {
  calcule: JSX.Element;
  settings: JSX.Element;
}

export const HomeCalcule = () => {
  const stage = useSelector((rootReducer: RootState) => rootReducer.managerReducer.system.home.calculeStage)
  
  const HomeStages = {
    calcule: <HomeCalculeForm />,
    settings: <HomeCalculeConfig />
  }

  return (
    <homecalcule.root>
      { HomeStages[stage] }
    </homecalcule.root>
  )
}