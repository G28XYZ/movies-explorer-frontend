function Promo({ handleButtonClick }) {
  return (
    <section className="promo color_background">
      <h1 className="promo__title text_title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <nav>
        <ul className="promo__list">
          <li
            name="aboutProject"
            className="promo__list-item color_secondary text"
            onClick={handleButtonClick}
          >
            О проекте
          </li>
          <li
            name="techs"
            className="promo__list-item color_secondary text"
            onClick={handleButtonClick}
          >
            Технологии
          </li>
          <li
            name="student"
            className="promo__list-item color_secondary text"
            onClick={handleButtonClick}
          >
            Студент
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Promo;
