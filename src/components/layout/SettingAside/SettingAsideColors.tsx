import React, { useRef, useState } from "react";

import { renew, check, close } from "../../../assets/SVGs";
import { RootState } from "../../../store/store";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";

import { settingActions, MAIN_COLOR, SECONDARY_COLOR } from "../../../store/slices/setting-slice";

const fullHint = "double click to choose the secondary color";

enum clicks {
  none,
  single,
  double,
}
let clicked: clicks = clicks.none;
const SettingAsideColors = () => {
  const dispatch = useAppDispatch();

  const [hint, setHint] = useState("");
  const toggleHint = () => {
    if (hint.length < fullHint.length) {
      let i = 0;
      const hintWriter = setInterval(() => {
        for (let index = i; index === i && index < fullHint.length; index++) setHint((perv) => perv + fullHint[index]);
        i < fullHint.length ? i++ : clearInterval(hintWriter);
      }, 70);
    } else {
      let i = fullHint.length;
      const hintEreaser = setInterval(() => {
        setHint((perv) => perv.slice(0, -1));
        i === 0 ? clearInterval(hintEreaser) : i--;
      }, 70);
    }
  };
  const colors = useAppSelector((state: RootState) => state.settingReducer.colors);
  const isMainColor = useAppSelector((state: RootState) => state.settingReducer.tryColor[0]);
  const colorPiker = useRef(null) as React.RefObject<HTMLInputElement>;
  const colorsHandler = (color: string) => {
    clicked === clicks.none ? (clicked = clicks.single) : (clicked = clicks.double);
    if (clicked === clicks.double) dispatch(settingActions.changeColor(["secondary", color]));
    else setTimeout(() => clicked === clicks.single && dispatch(settingActions.changeColor(["main", color])), 500);
    setTimeout(() => (clicked = clicks.none), 500);
  };
  const toggleIsMain = () => {
    dispatch(settingActions.toggleTryColor());
    if (colorPiker.current) colorPiker.current.value = isMainColor ? colors.secondaryColor :  colors.mainColor;
  };
  const colorPickerHandlerHandler = (x: React.ChangeEvent<HTMLInputElement>) => dispatch(settingActions.tryColor(x.currentTarget.value));
  const canclePickingHandler = () => dispatch(settingActions.tryColor(null));
  const confirmPickingHandler = () => {
    dispatch(settingActions.confirmTryColor(colorPiker.current?.value || ""));
    dispatch(settingActions.changeColor([isMainColor ? "main" : "secondary", colorPiker.current?.value || ""]));
  };

  const toggleHintSpan = (
    <span
      className="setting-aside__colors__hint-mark"
      onClick={() => (hint.length === 0 || hint.length === fullHint.length ? toggleHint() : "")}
      children="!"
    />
  );

  return (
    <div>
      <ul className="setting-aside__colors">
        <h3 className="setting-aside__title  setting-aside__title--colors">
          colors
          <span
            className=" setting-aside__colors__color"
            style={{
              background: `linear-gradient(to right, ${MAIN_COLOR} 50%, ${SECONDARY_COLOR} 50%)`,
              borderColor: "#fff",
            }}
          />
        </h3>
        <p className="setting-aside__colors__hint">
          {toggleHintSpan}
          {hint}
        </p>
        {colors.allcolors.map((color) => (
          <li
            key={color}
            className={" setting-aside__colors__color"}
            onClick={() => colorsHandler(color)}
            style={{ background: color, borderColor: color === colors.mainColor || color === colors.secondaryColor ? "#fff" : color }}
          />
        ))}
        {/* COLOR PICKER JSX */}
        <div className="setting-aside__colors__add">
          <span
            className={"setting-aside__colors__add__svg" + (isMainColor ? "" : " secondary")}
            onClick={toggleIsMain}
            children={renew}
          />
          <label htmlFor="pick" className="setting-aside__colors__add__input-label" children="pick:" />
          <input
            type="color"
            id="pick"
            className="setting-aside__colors__add__input"
            ref={colorPiker}
            defaultValue={isMainColor ? colors.mainColor : colors.secondaryColor}
            onChange={(x) => colorPickerHandlerHandler(x)}
          />

          <span
            onClick={confirmPickingHandler}
            className={"setting-aside__colors__add__svg setting-aside__colors__add__svg--confirm"}
            children={check}
          />
          <span
            onClick={canclePickingHandler}
            className={"setting-aside__colors__add__svg setting-aside__colors__add__svg--cancel"}
            children={close}
          />
        </div>
      </ul>
    </div>
  );
};

export default SettingAsideColors;
