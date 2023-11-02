import React, { FC } from "react";

const SectionHeading: FC<{ isActive: boolean; text: string }> = ({ isActive, text }) => (
  <h2 className={isActive ? "heading-secondary heading-secondary--active" : "heading-secondary"} children={text} />
);

export default SectionHeading;
