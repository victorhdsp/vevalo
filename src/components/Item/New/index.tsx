import css from './style.module.scss'

import ButtonNew from '@/components/Button/New';
import Card from '@/components/Card';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const New = (props: Props) => {

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span>
          
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={css["dialog-overlay"]} />
        <Dialog.Content className={css["dialog-content"]}>
          <Card orientation='vertical' className='gap-md'>
            <Dialog.Title className={css["dialog-title"]}>
              { props.title }
            </Dialog.Title>
            
            <div>
              { props.children }
            </div>
            
            <Dialog.Close asChild>
              <button data-close>
                <X className='absolute top-[15px] right-[15px] cursor-pointer' size={18} />
              </button>
            </Dialog.Close>
          </Card>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default New