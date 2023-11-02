import { forwardRef, RefObject } from "react";

const HexSlider = forwardRef<
  HTMLDivElement,
  { angle?: number; children: JSX.Element; className: string;  ref?: RefObject<HTMLDivElement> }
>((props, ref) => (
  <div
    className={ "hex-slider " + props.className }
    style={{  transform: `rotateY(${props.angle}deg)` }} 
    children={props.children}
    ref={ref}
  />
));

export default HexSlider;
