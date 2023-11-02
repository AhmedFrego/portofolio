import React, { FC, useEffect, useRef, useState, RefObject } from "react";
import { useNavigate } from "react-router-dom";
import { react } from "../assets/SVGs";

import Rate from "../components/UI/Rate";

import { ArticleClass } from "../models/AricleClass";

import { changeShownLetters } from "../util/lettersCalculator";

let articleWidth = 45;

const Article: FC<{ data: ArticleClass }> = ({ data }) => {
  const [width, setWidth] = useState(articleWidth);

  const textContainer = useRef(null) as RefObject<HTMLElement>;
  const navigate = useNavigate();
  let lines: string[] = [];

  // const changeShownLetters = (parent: HTMLElement) => {
  //   const children = parent.getElementsByTagName("p")[0];
  //   const fontSize = window.getComputedStyle(children).getPropertyValue("font-size");
  //   const letterNum = Math.floor((parent.clientWidth / parseFloat(fontSize)) * 2) - 10;
  //   setWidth(letterNum);
  //   console.log(children);
  //   console.log(fontSize);

  //   articleWidth = letterNum;
  // };

  data.article
    .replaceAll(/\*[0-9]+\*|`+ ?{\w+}|````?/g, "")
    .split("\n")
    .forEach((line: string) => {
      if (line.trim().length !== 0) lines.push(line.length > width ? `${line.slice(0, width)} ...` : line);
    });

  const navigateToDetailsHandler = () => navigate(`/articles/article/#${data.id}`);

  useEffect(() => {
    if (textContainer && textContainer.current) changeShownLetters(textContainer.current);
  }, [textContainer]);

  return (
    <article onClick={navigateToDetailsHandler} className="article" ref={textContainer} onLoad={() => console.log("me")}>
      {/* *********** */}
      <h4 className="heading heading--main article__title">{data.title}</h4>
      <p className="article__used-languages ">
        {data.usedLanguages.map((i: string) => (
          <a key={i}href={'/red'} onClick={(e) => e.stopPropagation()} children={ i } />
        ))}
      </p>
      <Rate rate={data.rate} />
      <code>
        {lines.slice(0, 3).map((line, i) => (
          <p key={data.id + i} className="paragraph--default">
            {line}
          </p>
        ))}
      </code>
    </article>
  );
};

export default Article;
