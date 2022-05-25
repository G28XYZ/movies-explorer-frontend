function AboutProject() {
  return (
    <section className="project">
      <h2 className="project__title text_title">О проекте</h2>
      <ul className="project__about">
        <li>
          <h3 className="project__about-title text_title">Дипломный проект включал 5 этапов</h3>
          <p className="project__about-text text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </li>
        <li>
          <h3 className="project__about-title text_title">На выполнение диплома ушло 5 недель</h3>
          <p className="project__about-text text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </li>
      </ul>
      <div className="project__duration">
        <div className="project__duration-area">
          <div className="project__duration-time text color_primary">1 неделя</div>
          <p className="project__duration-name text color_text">Back-end</p>
        </div>
        <div className="project__duration-area">
          <div className="project__duration-time text color_secondary">4 недели</div>
          <p className="project__duration-name text color_text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
