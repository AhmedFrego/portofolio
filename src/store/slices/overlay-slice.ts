import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  show: boolean;
  children: JSX.Element | null;
}
const initialState: initialStateType = {
  show: false,
  children: null,
};

const overlaySlice = createSlice({
  name: "overlay",
  initialState: initialState,
  reducers: {
    closeOverlay: (state) => {
      state.children = null;
      state.show = false;
    },
    showOverlay: (state, action: PayloadAction<JSX.Element>) => {
      state.show = true;
      state.children = action.payload;
    },
  },
});

export default overlaySlice.reducer;
export const overlayActions = overlaySlice.actions;
