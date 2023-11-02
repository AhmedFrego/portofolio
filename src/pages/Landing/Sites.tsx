import React, { useEffect, useRef, useState, MouseEvent } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { SBGActions } from "../../store/slices/smartBackground-slice";

import Site from "../../components/Site";

import { angelLeft, angelRight } from "../../assets/SVGs";
import HexSlider from "../../components/UI/HexSlider";

import { SITES } from "../../store/DUMMY-DATA/sites";

let transitionDuration: number;

const Sites = () => {
  const currentSection = useAppSelector((state: RootState) => state.SBGReducer.currentSection);
  const isMe = currentSection?.classList.contains("sites-section");
  const dispatch = useAppDispatch();
  const slider = useRef<HTMLDivElement>(null);

  const [sitesLoop, setsitesLoop] = useState(SITES);
  const [modifire, setModefire] = useState("");
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    if (isMe) dispatch(SBGActions.changeBackgroundStyles({ extraClass: "SBG--sites" }));
  }, [currentSection, dispatch, isMe]);

  const changeActiveHandler = (value: 1 | -1) =>
    value === 1
      ? setsitesLoop((perv) => [...perv.slice(1), perv[0]])
      : setsitesLoop((perv) => [perv[perv.length - 1], ...perv.slice(0, perv.length - 1)]);

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e);
  };

  const slides = sitesLoop.map(
    (site, i) => i < 6 && <Site key={site.id} className="hex-slider__slide" data={site} />
  );

  const arrowHandler = (value: 1 | -1) => {
    setModefire(value === 1 ? "hex-slider--to-left" : "hex-slider--to-right");
    changeActiveHandler(value);
    setMoving(true);
    setTimeout(() => {
      setMoving(false);
      setModefire("");
    }, transitionDuration);
  };

  useEffect(() => {
    if (slider) transitionDuration = +window.getComputedStyle(slider.current!).transitionDuration.replace("s", "") * 1000;
  }, [slider]);

  return (
    <section className="sites-section spiked" id="sites">
      <h2 className={isMe ? "heading-secondary heading-secondary--active" : "heading-secondary"}>Sites</h2>
      <div className="sites sites-container container">
        <HexSlider children={<>{slides}</>} ref={slider} className={modifire} />
      </div>
      <div className="arrows">
        <button disabled={moving} className="arrows--left" onClick={() => arrowHandler(-1)} children={angelLeft} />
        <button disabled={moving} className="arrows--right" onClick={() => arrowHandler(1)} children={angelRight} />
      </div>
    </section>
  );
};

export default Sites;
