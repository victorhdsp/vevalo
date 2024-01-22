import css from './style.module.scss';

import * as HoverCard from '@radix-ui/react-hover-card';
import Card from '@/components/Card';
import Button from '@/components/Button/Default';
import { Edit, Trash } from 'lucide-react';

interface Props {
  children: React.ReactNode;
  onClickInEdit?: () => void;
  onClickInDelete?: () => void;
}

const EditOrDelete = (props: Props) => {

  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        { props.children }
      </HoverCard.Trigger>
      <HoverCard.Content className={css["root"]} side="right" sideOffset={5}>
        <Card orientation='vertical' className={css['card']}>
          <Button onClick={props.onClickInEdit} icon={Edit} variant='primary' size='small'>Editar</Button>
          <Button onClick={props.onClickInDelete} icon={Trash} variant='danger' size='small'>Deletar</Button>
        </Card>
      </HoverCard.Content>
    </HoverCard.Root>
  )
}

export default EditOrDelete