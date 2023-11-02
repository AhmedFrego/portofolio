import { createPortal } from "react-dom";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

const SmartBackground = () => {
  const data = useAppSelector((state: RootState) => state.SBGReducer);

  return (
    <>
      {data.currentSection &&
        createPortal(<div className={"SBG " + data.extraClass || ""} style={{ ...data.style }} />, data.currentSection!)}
    </>
  );
};

export default SmartBackground;
