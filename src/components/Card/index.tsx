'use client';

import css from './style.module.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

const Card = ({...props}: Props) => {
  const className = [css["card"]];
  if (props.className) className.push(props.className);

  return (
    <div data-oriented={props.orientation} className={className.join(' ')}>
      {props.children}
    </div>
  );
}

export default Card;