import { createSlice } from "@reduxjs/toolkit";

type state = {
  top?: string;

  extraClass?: string;
  style?: any;
  currentSection?: HTMLElement | null;
};

const initialState: state = {
  top: "",
  extraClass: "",
  style: {},
  currentSection: document.querySelector("section"),
};

export const SBGSlice = createSlice({
  name: "smartBackground",
  initialState,
  reducers: {
    changeCurrentSection(state, actions) {
      if (actions.payload && actions.payload !== state.currentSection) state.currentSection = actions.payload;
    },
    changeBackgroundStyles(state, actions: { payload: Partial<state> }) {
      state.extraClass = actions.payload.extraClass || "";
      state.style = actions.payload.style || "";
      state.top = actions.payload.top || "";
    },
  },
});

export const SBGActions = SBGSlice.actions;

export default SBGSlice.reducer;
