import React, { useEffect, useState } from "react";

import { SBGActions } from "../../store/slices/smartBackground-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import Article from "../../components/Article";

import { articlesData } from "../../store/DUMMY-DATA/articles";
import { angelRight } from "../../assets/SVGs";
import SvgButton from "../../components/SvgButton";
import SectionHeading from "../../components/typography/SectionHeading";

const Articles = () => {
  const currentSection = useAppSelector((state: RootState) => state.SBGReducer.currentSection);
  const isMe = currentSection?.classList.contains("articles-section");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMe) dispatch(SBGActions.changeBackgroundStyles({ extraClass: "SBG--articles" }));
  }, [currentSection, dispatch, isMe]);

  return (
    <section className="articles-section" id="articles">
      <SectionHeading isActive={ !!isMe} text='Articles' />
      <div className="container articles">{articlesData.map((item, i) => item && i < 4 && <Article key={item.id} data={item} />)}</div>
      <SvgButton svg={angelRight} text="view more" />
    </section>
  );
};

export default Articles;
