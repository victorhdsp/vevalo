import css from './style.module.scss'

import { X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

import Card from '@/components/Card';
import Button from "@/components/Button/Default"

interface Props {
  title: string;
  children: React.ReactNode;
  trigger: React.ReactNode;
}

const _Dialog = (props: Props) => {
  
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span>
          { props.trigger }
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={css["dialog-overlay"]} />
        <Dialog.Content className={css["dialog-content"]}>
          <Card orientation='vertical' className={css["card"]}>
            <div className={css["header"]}>
              <Dialog.Title className={css["dialog-title"]}>
                { props.title }
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button className={css["close"]} variant='outline' icon={X}/>
              </Dialog.Close>
            </div>
            
            <div className={css["body"]}>
              { props.children  }
            </div>
          </Card>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default _Dialog