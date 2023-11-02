export const changeShownLetters = (parent: HTMLElement) => {
  const children = parent.getElementsByTagName("p")[0];
  const fontSize = window.getComputedStyle(children).getPropertyValue("font-size");
  const letterNum = Math.floor((parent.clientWidth / parseFloat(fontSize)) * 2) - 10;
  // articleWidth = letterNum;  console.log(children);
  // console.log(fontSize);
  return letterNum;
};
