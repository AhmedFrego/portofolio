import React, { useEffect, useRef, useState } from "react";

import { RootState } from "../../../store/store";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { settingActions } from "../../../store/slices/setting-slice";

import { settingGear, settingGearSolid } from "../../../assets/SVGs";
import SettingAsideColors from "./SettingAsideColors";
import SettingAsideFonts from "./SettingAsideFonts";
import SettingAsideThemes from "./SettingAsideThemes";

import { rgbToHex} from '../../../util/toHex'

const SettingAside = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.settingReducer.isOpen);

  const toggleIsOpen = () => dispatch(settingActions.toggleAside());
  // let x = 68;
  // console.log(rgbToHex(x, x, x));


  return (
    <div className="setting">
      <div className="setting__svg" onClick={toggleIsOpen}>
        <span className={`setting__svg-icon setting__svg-icon--gear-solid ${isOpen ? "spin" : ""}`} children={settingGearSolid} />
        <span className={`setting__svg-icon setting__svg-icon--gear ${isOpen ? "spin" : ""}`} children={settingGear} />
      </div>
      <aside className={`setting-aside ${isOpen ? "open" : ""}`}>
        <SettingAsideThemes />
        <SettingAsideColors />
        <SettingAsideFonts />
      </aside>
    </div>
  );
};

export default SettingAside;
