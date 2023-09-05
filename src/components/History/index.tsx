import { useSelector } from "react-redux";
import { HistoryStateType } from "../../redux/history/slice";

import HistoryItem from "./Item";
import css from './history.module.scss';
import { useEffect, useRef } from "react";
import { RootState } from "../../redux/store";

const History = () => {
    const scrollableDivRef = useRef(null);
    const history = useSelector((rootReducer: RootState) => rootReducer.historyReducer) as HistoryStateType;

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
        <div className={css["history"]}>
          <h2>Histórico</h2>
          <div className={css["card"]} ref={scrollableDivRef}>
            { history.calcules.map((item, index) => (
                <HistoryItem key={index} item={item} />
            ))}
          </div>
        </div>
    )
}

export default History;