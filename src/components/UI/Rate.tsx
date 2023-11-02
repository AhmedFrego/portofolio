import React, { FC } from "react";
import { staFill, starThreeQuarters, star, starHalf, starQuarter } from "../../assets/SVGs";

const Rate: FC<{ rate?: number[] }> = ({ rate = [] }) => {
  const rat = rate.length ? rate.reduce((a, b) => a + b) / rate.length : 0;

  return (
    <div className="stars-container">
      {[...Array(5)].map((_, i) => {
        const val = +(rat - i).toFixed(2);
        switch (true) {
          case val > 0.9:
            return <span key={i} className=" star star--fill" children={star} />;
          case val > 0.66:
            return <span key={i} className=" star star--fill" children={starThreeQuarters} />;
          case val > 0.33:
            return <span key={i} className=" star star--fill" children={starHalf} />;
          case val > 0.15:
            return <span key={i} className=" star star--fill" children={starQuarter} />;
          default:
            return <span key={i} className="star" children={staFill} />;
        }
      })}
    </div>
  );
};

export default Rate;
