import React from "react";

import { sun, moon } from "../../../assets/SVGs";

import { settingActions } from "../../../store/slices/setting-slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";

const SettingAsideThemes = () => {
  const dispatch = useAppDispatch();

  const isDarkMode = useAppSelector((state: RootState) => state.settingReducer.theme.isDark);
  const themeHandler = () => dispatch(settingActions.toggleDarkMode());

  return (
    <ul className="setting-aside__themes ">
      <h3 className="setting-aside__title">theme:</h3>
      <li
        className={`setting-aside__themes__svg setting-aside__themes__svg--dark ${isDarkMode ? "active" : ""}`}
        children={moon}
        onClick={themeHandler}
      />
      <li
        className={`setting-aside__themes__svg setting-aside__themes__svg--light ${isDarkMode ? "" : "active"}`}
        children={sun}
        onClick={themeHandler}
      />
    </ul>
  );
};

export default SettingAsideThemes;
