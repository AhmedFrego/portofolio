import React, { FC, useState } from "react";
import { textWriter, textEreaser } from "../util/textEditing";

const SvgButton: FC<{
  svg: JSX.Element;
  text: string;
  alwaysShow?: boolean;
  clickHandler?: () => void;
  type?: "submit" | "reset" | "button";
}> = ({ svg, text, alwaysShow, clickHandler, type }) => {
  const [buttonText, setButtonText] = useState("");
  const hoverHandler = () => textWriter(text, 80, setButtonText);
  const leaveHandler = () => textEreaser(text, 5, setButtonText);
  return (
    <button
      className={"svg-button" + (alwaysShow ? " static" : "")}
      onMouseEnter={hoverHandler}
      onMouseLeave={leaveHandler}
      onClick={clickHandler}
      type={type}
    >
      <span>{(alwaysShow && text) || buttonText}</span>
      {svg}
    </button>
  );
};

export default SvgButton;
