import { Button } from '@/components/ui/button';
import css from './style.module.scss';
import { ElementType } from 'react';

interface Props {
  title: string
  icon: ElementType
}

export const HomeCalculeFooter= ({title, icon:Icon}: Props) => {
  return (
    <footer className={css["HomeCalculeFooter"]}>
      <Button type="submit">
        <span>{title}</span>
        <Icon className="w-4 h-4 ml-2" />
      </Button>
    </footer>
  )
}