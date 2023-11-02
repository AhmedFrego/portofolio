import { configureStore } from "@reduxjs/toolkit";

import SBGReducer from "./slices/smartBackground-slice";
import settingReducer from "./slices/setting-slice";
import overlayReducer from "./slices/overlay-slice";

export const store = configureStore({
  reducer: {
    overlayReducer,
    SBGReducer,
    settingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
