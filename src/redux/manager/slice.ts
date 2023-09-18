import { Sitemap } from "@/App";
import { HomeCalculeStages } from "@/components/organisms/HomeCalcule";
import { createSlice } from "@reduxjs/toolkit";

export type SystemPages = keyof Sitemap;

export type HomeStages = keyof HomeCalculeStages;

interface ManagerState {
  system: {
    currentPage: SystemPages;
    home: {
      calculeStage: HomeStages;
    }
  }
}

const initialState: ManagerState = {
  system: {
    currentPage: "home",
    home: {
      calculeStage: "calcule"
    }
  }
}

const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.system.currentPage = action.payload;
    },
    setHomeStage: (state, action: {payload:HomeStages}) => {
      state.system.home.calculeStage = action.payload;
    }
  }
});

export const { setCurrentPage, setHomeStage } = managerSlice.actions;
export default managerSlice.reducer;