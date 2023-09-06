import { AdditionalType } from "../../redux/calcule/types";
import { ServicesType } from "../../redux/company/slice";

export const fixScrollBar = (scrollableDivRef: React.MutableRefObject<null>) => {
    const scrollableDiv = scrollableDivRef.current as HTMLDivElement | null;

    if (scrollableDiv) {
        if (scrollableDiv.scrollHeight > scrollableDiv.clientHeight) {
            scrollableDiv.scrollTo(0, scrollableDiv.scrollHeight);
            scrollableDiv.classList.add('lateral_scroll');
        } else {
            scrollableDiv.classList.remove('lateral_scroll');
        }
    }
}

export const defaultAdditionalItem = () => ({
    id: Math.random().toString(36).substr(2, 9),
    name: '',
    type: 'fixed',
    value: 0,
} as AdditionalType)

export const defaultServiceItem = () => ({
    id: Math.random().toString(36).substr(2, 9),
    name: '',
    estimated_time: 0,
    margin_profit: 0,
    additionals: []
} as ServicesType)