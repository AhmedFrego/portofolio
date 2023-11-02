import React, { FC } from "react";
import { Style } from "util";
import Keyboard from "./Keyboard";

import Mousebad from "./Mousebad";
type Props = {
  children?: JSX.Element;
  className?: string;
  style?: Style;
  letter?: string;
};

const LapTop: FC<Props> = ({ children, className, style, letter }) => (
  <div className={"laptop " + (className ? className : "")}>
    <div className="laptop-container">
      <div className="laptop__screen">
        <div className="laptop__screen__face laptop__screen__face--back" />
        <div className="laptop__screen__side laptop__screen__side--right" />
        <div className="laptop__screen__side laptop__screen__side--left" />
        <div className="laptop__screen__side laptop__screen__side--top" />
        <div className="laptop__screen__face laptop__screen__face--front" />
        <div className="laptop__content" children={children} />
      </div>
      <div className="laptop__keybad">
        <div className="laptop__keybad__side laptop__keybad__side--right" />
        <div className="laptop__keybad__side laptop__keybad__side--left" />
        <div className="laptop__keybad__side laptop__keybad__side--top">
          <Keyboard /> <Mousebad />
        </div>
        <div className="laptop__keybad__side laptop__keybad__side--bottom" />
        <div className="laptop__keybad__side laptop__keybad__side--back" />
        <div className="laptop__keybad__side laptop__keybad__side--front" />
      </div>
    </div>
  </div>
);

export default LapTop;
