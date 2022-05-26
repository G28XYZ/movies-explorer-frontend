import AboutMe from "../AboutMe";
import AboutProject from "../AboutProject";
import Portfolio from "../Portfolio";
import Promo from "../Promo";
import Techs from "../Techs";

function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
