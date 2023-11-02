import  { FC } from "react";


type Props = {
  children: JSX.Element,
};

const Phone: FC<Props> = ({ children }) => (
  <div className="phone">
    <div className="phone__face phone__face--back">
      <img src={require("../../assets/imgs/phone-back.png")} alt="phone-back" className="phone__face__img" />
      <div className="phone__face__cover  phone__face__cover--back" />
      <div className="phone__face__square phone__face__square--back" />
    </div>

    <div className="phone__face phone__face--front">
      <img src={require("../../assets/imgs/phone-front.png")} alt="phone-front" className="phone__face__img " />
      <div className="phone__face__cover  phone__face__cover--front" />
      <div className="phone__face__square phone__face__square--front" />

      <div className="phone__content">{children}</div>
    </div>
  </div>
);

export default Phone;
