function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title text color_text">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__link text_medium underline-p20" href="/#">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link text_medium underline-p20" href="/#">
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link text_medium" href="/#">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
