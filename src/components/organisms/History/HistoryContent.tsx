import css from './style.module.scss';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/redux/store';
import { HistoryStateType } from '@/redux/history/slice';

interface Props {
  children: React.ReactNode
}

export const HistoryContent = ({children}: Props) => {
  const scrollableDivRef = useRef(null);
  const history: HistoryStateType = useSelector((rootReducer: RootState) => rootReducer.historyReducer);

  useEffect(() => {
      const scrollableDiv = scrollableDivRef.current as HTMLDivElement | null;

      if (scrollableDiv) {
          if (scrollableDiv.scrollHeight > scrollableDiv.clientHeight) {
              scrollableDiv.scrollTo(0, scrollableDiv.scrollHeight);
              scrollableDiv.classList.add(css['lateral_scroll']);
          } else {
              scrollableDiv.classList.remove(css['lateral_scroll']);
          }
      }
  }, [history.calcules]);

  return (
    <div className={css["HistoryContent"]} ref={scrollableDivRef}>
      { children }
    </div>
  )
}