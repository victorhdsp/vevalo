import css from './style.module.scss';
import { ElementType } from 'react';

import { Button } from '@/components/ui/button';

interface Props {
  title: string
  icon: ElementType
  onChangeStage: () => void
}

export const HomeCalculeHeader = ({title, icon:Icon, onChangeStage}: Props) => {
  return (
    <header className={css["HomeCalculeHeader"]}>
      <h2>{ title }</h2>
        
      <Button variant="secondary" type='button' onClick={onChangeStage}>
        <Icon className="w-4 h-4" />
      </Button>
    </header>
  )
}