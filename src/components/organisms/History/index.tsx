import css from './style.module.scss';
import { useSelector } from "react-redux";
import history from "./Composer";
import { RootState } from "@/redux/store";
import { HistoryItemType } from "@/redux/history/slice";

import { OverflowBox } from "@/components/molecules/OverflowBox";

const History = () => {
    const calcules: HistoryItemType[] = useSelector((rootReducer: RootState) => rootReducer.historyReducer.calcules);

    return (
      <history.root>
        <history.header />
          <OverflowBox className={css["HistoryContent"]}>
            { calcules.map((item, index) => ( 
              <history.item key={index} item={item} /> 
            ))}
          </OverflowBox>
      </history.root>
    )
}

export default History;