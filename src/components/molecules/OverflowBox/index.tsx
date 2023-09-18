import css from './style.module.scss';
import { useEffect, useRef } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  maxHeight?: string
}

export const OverflowBox = ({ children, maxHeight, className, ...rest }: Props) => {
  const overflowBoxRef = useRef(null) as React.MutableRefObject<HTMLDivElement | null>;

  useEffect(() => {
    const overflowBox = overflowBoxRef.current;
    if (!overflowBox) return;
    console.log('overflow')

    if (overflowBox.scrollHeight > overflowBox.clientHeight) {
      overflowBox.classList.add('lateral_scroll');
      overflowBox.scrollTo(0, overflowBox.scrollHeight);
    } else {
      overflowBox.classList.remove('lateral_scroll');
    }
  }, [children])

  return (
    <div 
      className={`${css["OverflowBox"]} ${className && className}`} 
      ref={overflowBoxRef}
      style={{ maxHeight }}
      {...rest}
    >
      {children}
    </div>
  )
}