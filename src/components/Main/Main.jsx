import AboutMe from "../AboutMe";
import AboutProject from "../AboutProject";
import Portfolio from "../Portfolio";
import Promo from "../Promo";
import Techs from "../Techs";

import { useRef } from "react";

function Main() {
  const refs = {
    aboutProject: useRef(null),
    techs: useRef(null),
    student: useRef(null),
  };

  function handleButtonClick(e) {
    const name = e.target.attributes.name.value;
    const element = refs[name].current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main className="content">
      <Promo handleButtonClick={handleButtonClick} />
      <AboutProject ref={refs.aboutProject} />
      <Techs ref={refs.techs} />
      <AboutMe ref={refs.student} />
      <Portfolio />
    </main>
  );
}

export default Main;
