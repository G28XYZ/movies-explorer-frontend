import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title text color_text">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__list-item underline-p20">
          <a className="portfolio__link" href="/#">
            <p className="text_medium">Статичный сайт</p>
            <img src={arrow} alt="Иконка - ссылочная стрека" />
          </a>
        </li>
        <li className="portfolio__list-item underline-p20">
          <a className="portfolio__link " href="/#">
            <p className="text_medium">Адаптивный сайт</p>
            <img src={arrow} alt="Иконка - ссылочная стрека" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="/#">
            <p className="text_medium">Одностраничное приложение</p>
            <img src={arrow} alt="Иконка - ссылочная стрека" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
