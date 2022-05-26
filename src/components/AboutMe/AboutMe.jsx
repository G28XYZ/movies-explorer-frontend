function AboutMe() {
  return (
    <section className="about">
      <h2 className="about__header text_subtitle underline-p25">Студент</h2>
      <div className="about__info">
        <div className="about__info-description">
          <h3 className="about__info-title text_title">Александр</h3>
          <p className="about__info-subtitle">Инженер-конструктор, 31 год</p>
          <p className="about__info-description text">
            Я живу в Новосибирске. Работаю инженером в небольшой производственной компании. Женат,
            есть кот. Увлекаюсь футболом. Нравится решать задачи по программированию. Учусь в
            Яндекс.Практикуме на веб-разработчика.
          </p>
          <ul className="about__links text">
            <li>
              <a href="/#" className="about__link">
                ВКонтакте
              </a>
            </li>
            <li>
              <a href="/#" className="about__link">
                Github
              </a>
            </li>
          </ul>
        </div>
        <img
          className="about__info-image"
          src="https://tinyurl.com/2n9t99p3"
          alt="Фотография студента"
        />
      </div>
    </section>
  );
}

export default AboutMe;
