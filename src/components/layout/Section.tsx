import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { SBGActions } from "../../store/slices/smartBackground-slice";
import { RootState } from "../../store/store";
import SectionHeading from "../typography/SectionHeading";

const Section: FC<{
  className?: string;
  name: string;
  title?: boolean;
  append?: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
}> = (props) => {
  const { name, children, title, className, append } = props;

  const currentSection = useAppSelector((state: RootState) => state.SBGReducer.currentSection);
  const isMe = currentSection?.id === name;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMe) dispatch(SBGActions.changeBackgroundStyles({ extraClass: "SBG--" + name }));
  }, [currentSection, dispatch, isMe, name]);
  return (
    <section className={`${name}-section ${className || ""}`} id={name}>
      {title && <SectionHeading isActive={!!isMe} text={name} />}
      <div className={"container " + name + "-container"} children={children} />
      {append}
    </section>
  );
};

export default Section;
