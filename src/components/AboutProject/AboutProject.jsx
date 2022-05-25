function AboutProject() {
  return (
    <section className="project">
      <h2 className="project__title text_title">О проекте</h2>
      <div className="project__about">
        <div>
          <h3 className="project__about-title text_title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__about-text text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="project__about-title text_title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__about-text text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
