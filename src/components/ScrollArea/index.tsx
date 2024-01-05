'use client';

import css from './style.module.scss'

import * as ScrollArea from '@radix-ui/react-scroll-area';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = ({...props}: Props) => {
  return (
    <ScrollArea.Root className={css["root"]}>
      <ScrollArea.Viewport className={css["viewport"]}>
        <div className={`w-full h-full ${props.className}`}>
          { props.children }
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar className={css["scrollbar"]} orientation="vertical">
        <ScrollArea.Thumb className={css["thumb"]} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar className={css["scrollbar"]} orientation="horizontal">
        <ScrollArea.Thumb className={css["thumb"]} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className={css["corner"]} />
    </ScrollArea.Root>
  );
}

export default Card;