import React from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { overlayActions } from "../../store/slices/overlay-slice";
import { RootState } from "../../store/store";

const Overlay = () => {
  const overlayRoot = document.getElementById("overlay-root") as HTMLDivElement;

  const show = useAppSelector((state: RootState) => state.overlayReducer.show);
  const children = useAppSelector((state: RootState) => state.overlayReducer.children);
  
  const dispatch = useAppDispatch();
  const closeOverlayHandler = () => dispatch(overlayActions.closeOverlay());

  const content = <div className="overlay__content" children={children} />;
  return <>{show && createPortal(<div className="overlay" children={content} onClick={closeOverlayHandler} />, overlayRoot)}</>;
};

export default Overlay;
