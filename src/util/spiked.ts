// let spiked = Array(...document.querySelectorAll(".spiked"));
// let computedFontSize = parseInt(window.getComputedStyle(document.querySelector('html')).fontSize);

// function spike(x) {
//   let r = Math.ceil(x.offsetWidth / (1.5*computedFontSize));
//   let vOne = [];
//   let vTwo = [];

//   for (let i = 0; i < (r+1); i++) {
//     vOne.push(i % 2 === 1
//       ? 1.5 * i + "rem 1.5rem, "
//       : 1.5 * i + "rem 0, ");
//   }

//   for (let i = 1; i < (r+1); i++) {
//     vTwo.push(i % 2 === 1
//       ? `calc(100% - 1.5*${i}rem) 100%, `
//       : `calc(100% - 1.5*${i}rem) calc(100% - 1.5rem),`);
//   }

//   let a = vOne.join("");
//   let b = vTwo.join("");
//   x.style.clipPath = `polygon(${a}100% 0,100% calc(100% - 1.5rem),${b}0 100%)`;
// }

// spiked.forEach(x => spike(x));

// window.onresize = _ => spiked.forEach(x => spike(x));

export const spike = () => {
  let spiked = Array(document.querySelectorAll(".spiked") as NodeListOf<HTMLElement>);
  let computedFontSize = parseInt(window.getComputedStyle(document.querySelector("html")!).fontSize);

  spiked.forEach((nodeList) =>
    nodeList.forEach((item) => {
      let r = Math.ceil(item.offsetWidth / (1.5 * computedFontSize));
      let vOne = [];
      let vTwo = [];

      for (let i = 0; i < r + 1; i++) {
        vOne.push(i % 2 === 1 ? 1.5 * i + "rem 1.5rem, " : 1.5 * i + "rem 0, ");
      }

      for (let i = 1; i < r + 1; i++) {
        vTwo.push(i % 2 === 1 ? `calc(100% - 1.5*${i}rem) 100%, ` : `calc(100% - 1.5*${i}rem) calc(100% - 1.5rem),`);
      }

      let a = vOne.join("");
      let b = vTwo.join("");
      item.style.clipPath = `polygon(${a}100% 0,100% calc(100% - 1.5rem),${b}0 100%)`;
    })
  );
};

export const spikeElement = (options: {
  element: HTMLElement;
  size?: number;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}) => {
  const { element, size, bottom, left, right, top } = options;
  let fontsize = parseInt(window.getComputedStyle(document.querySelector("html")!).fontSize);

  const repeatCount = Math.ceil(element.offsetWidth / ((size || 15 / 10) * fontsize));

  const topValue = [];
  const rightValue = [];
  const bottomValue = [];
  const leftValue = [];
  if (top)
    for (let i = 0; i < repeatCount + 1; i++) {
      topValue.push(i % 2 === 1 ? (size/10) * i + "rem 1.5rem, " : 1.5 * i + "rem 0, ");
    }

  console.log(repeatCount);
};
