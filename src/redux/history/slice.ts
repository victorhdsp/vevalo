import { createSlice } from '@reduxjs/toolkit';
import { CalculeStateType } from '../calcule/slice';

export interface HistoryItemType extends CalculeStateType {
    result: {
        hour_value: number,
        base_value: number,
        additional_value?: number[],
        fixed_value: number,
        total: number,
    }
}

export type HistoryStateType = {
    calcules: HistoryItemType[],
}

const initialState: HistoryStateType = {
    calcules: []
}

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addCalculeToHistory: (state, action) => {
            state.calcules.push(action.payload);
        }
    }
});

export const { addCalculeToHistory } = historySlice.actions;

export default historySlice.reducer;