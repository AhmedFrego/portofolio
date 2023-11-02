import React, { FC } from "react";

const Service: FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className={"service"}>
      <h3 className={"service__title"}>{title}</h3>
      <p className={"service__description"}>{description}</p>
    </div>
  );
};

export default Service;
