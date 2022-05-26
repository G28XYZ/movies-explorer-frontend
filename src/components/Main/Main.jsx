import AboutMe from "../AboutMe";
import AboutProject from "../AboutProject";
import Footer from "../Footer/Footer";
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
      <Footer />
    </main>
  );
}

export default Main;
