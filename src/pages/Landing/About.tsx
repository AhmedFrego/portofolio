import { typescriptColored, HtmlColored, cssColored, javascriptColored, reactColored, sassColored } from "../../assets/SVGs.js";
import Skill from "../../components/Skill";
import Section from "../../components/layout/Section";

const aboutText = [
  "My expertise is in the area of responsive design. with every line of code I strive to make the web a beautiful place",
  "My goal is to give the user the most interactive, enjoyable and convenient experience possible",
  "Using clean and tidy code to facilitate modification, debugging, adding and improving tasks in the future, using the most modern skills.",
];

const About = () => (
  <Section name="about" title>
      <div className="about__text"children={aboutText.map((string) => <p key={string}children={string} />)} />
      <ul className="about__skills">
        <Skill light="#f16529" dark="#e44d26" svg={HtmlColored} className="about__skill" />
        <Skill light="#3c9cd7" dark="#2062af" svg={cssColored} className="about__skill" />
        <Skill light="#f1bf22" dark="#e6a329" svg={javascriptColored} className="about__skill" />
        <Skill light="#1677C7" dark="#1368AD" svg={typescriptColored} className="about__skill" />
        <Skill dark="#CF649A" svg={sassColored} className="about__skill" />
        <Skill dark="#03a9f4" svg={reactColored} className="about__skill" />
      </ul>
  </Section>
);

export default About;
