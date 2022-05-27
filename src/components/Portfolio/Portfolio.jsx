import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title text color_text">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__list-item underline-p20">
          <a
            className="portfolio__link link"
            href="https://g28xyz.github.io/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text_medium">Статичный сайт</p>
            <img src={arrow} alt="Иконка - ссылочная стрека" />
          </a>
        </li>
        <li className="portfolio__list-item underline-p20">
          <a
            className="portfolio__link link"
            href="https://g28xyz.github.io/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text_medium">Адаптивный сайт</p>
            <img src={arrow} alt="Иконка - ссылочная стрека" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link link"
            href="https://mesto.online.nomoredomains.work"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text_medium">Одностраничное приложение</p>
            <img src={arrow} alt="Иконка - ссылочная стрека" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
