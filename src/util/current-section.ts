export const currentSection = () => {
  const sections = document.querySelectorAll("section") as NodeListOf<HTMLElement>;
  const sectionsReverse: HTMLElement[] = [];
  sections.forEach((x: HTMLElement) => sectionsReverse.unshift(x));

  let targetSection = sections[0];

  const scrollHandler = () => {
    for (let i = 0; i < sectionsReverse.length; i++) {
      if (window.scrollY >= sectionsReverse[i].offsetTop - window.innerHeight / 2.2) {
        targetSection = sectionsReverse[i];
        break;
      }
    }
  };
  scrollHandler();

  return targetSection as HTMLElement;
};
