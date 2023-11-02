import React, { ElementType, useState } from "react";

const Skill = (props: { light?: string; dark?: string; svg: ElementType; className?: string }) => {
  const [light, setLight] = useState("#bbb");
  const [dark, setDark] = useState("#999");

  return (
    <li
      className={"grey-svg " + props.className || ""}
      onMouseEnter={() => {
        setLight(props.light || "#bbb");
        setDark(props.dark || "#999");
      }}
      onMouseLeave={() => {
        setLight("#bbb");
        setDark("#999");
      }}
    >
      {<props.svg dark={dark} light={light} />}
    </li>
  );
};

export default Skill;
