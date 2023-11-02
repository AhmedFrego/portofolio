import { getRandomIntInclusive } from "./randomBetweenTwo";

export const textAnimation = (text: string, show: boolean = true, keep: boolean = false) =>
  text.split(" ").map((word: string, i: number) => (
    <span
      style={{
        marginRight: "8px",
        display: "inline-block",
        animation: keep
          ? `textEnterance${getRandomIntInclusive(1, 6)} 0s ease forwards`
          : show
          ? `textEnterance${getRandomIntInclusive(1, 6)} 2s ease forwards`
          : `vanish 0s ease forwards`,
      }}
      children={word}
      key={i}
    />
  ));
