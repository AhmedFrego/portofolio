import React, { useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { settingActions } from "../../../store/slices/setting-slice";
import { RootState } from "../../../store/store";

interface fontBarDataTybe {
  fromTop: number;
  parentHeight: number;
  height: number;
  headerHeight: number;
}

const SettingAsideFonts = () => {
  const dispatch = useAppDispatch();

  const changefontSizeInput = useRef(null) as React.RefObject<HTMLInputElement>;
  const [fontBarData, setFontBarData] = useState({
    fromTop: 0,
    parentHeight: 0,
    height: 0,
  } as fontBarDataTybe);
  const fonts = useAppSelector((state: RootState) => state.settingReducer.fonts);
  const changeFontHandler = (font: string) => dispatch(settingActions.changeActiveFont(font));

  const current = changefontSizeInput.current;
  const changeDataHandler = (current: HTMLInputElement) => {
    const header = document.getElementsByTagName("header")[0] as HTMLElement;
    if (current)
      setFontBarData((perv) => {
        return {
          height: current?.offsetHeight || perv.height,
          parentHeight: current?.parentElement?.offsetHeight || perv.parentHeight,
          fromTop: current?.parentElement?.offsetTop || perv.fromTop,
          headerHeight: header.offsetHeight,
        };
      });
  };

  useEffect(() => {
    if (current) changeDataHandler(current);
  }, [current]);

  const changeFontSizeHandler = (x: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(settingActions.changeFontSize(+x.currentTarget.value));

  return (
    <ul className="setting-aside__fonts">
      <h3 className="setting-aside__title setting-aside__title--fonts">fonts</h3>

      {fonts.fonts.map((font) => (
        <li
          onClick={() => changeFontHandler(font)}
          className={`setting-aside__fonts__font ${font === fonts.activeFont ? "active" : ""}`}
          children={font}
          style={{ fontFamily: font }}
          key={font}
        />
      ))}

      <div className="setting-aside__fonts__size-changer">
        <label htmlFor="font-size">font size</label>
        <input
          type="range"
          id="font-size"
          defaultValue={10}
          min="6"
          max="18"
          step={1}
          className={"setting-aside__fonts__size-changer__input"}
          onChange={(x) => changeFontSizeHandler(x)}
          onClick={(x) => x.currentTarget.parentElement?.offsetTop && changeDataHandler(x.currentTarget)}
          onLoad={(x) => x.currentTarget.parentElement?.offsetTop && changeDataHandler(x.currentTarget)}
          style={{
            top: `calc(${fontBarData.fromTop + fontBarData.headerHeight + fontBarData.parentHeight / 2}px  - 7rem )`,
            transform: `translateY()`,
          }}
          ref={changefontSizeInput}
        />
      </div>
    </ul>
  );
};

export default SettingAsideFonts;
