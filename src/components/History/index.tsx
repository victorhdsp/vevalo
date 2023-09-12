import { useDispatch, useSelector } from "react-redux";
import { HistoryStateType, clearHistory } from "../../redux/history/slice";

import HistoryItem from "./Item";
import css from './history.module.scss';
import { useEffect, useRef } from "react";
import { RootState } from "../../redux/store";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const History = () => {
    const scrollableDivRef = useRef(null);
    const history = useSelector((rootReducer: RootState) => rootReducer.historyReducer) as HistoryStateType;

    const dispatch = useDispatch();

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

    const handleClearHistory = () => {
        dispatch(clearHistory());
    }

    return (
        <div className={css["history"]}>
          <div className="flex justify-between">
            <h2>Histórico</h2>
            <Button variant="secondary" onClick={handleClearHistory}>
              <Trash className="w-4 h-4" />
            </Button>
          </div>
          <div className={css["card"]} ref={scrollableDivRef}>
            { history.calcules.map((item, index) => (
                <HistoryItem key={index} item={item} />
            ))}
          </div>
        </div>
    )
}

export default History;