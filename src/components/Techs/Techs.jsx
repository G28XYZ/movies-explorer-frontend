function Techs() {
  return (
    <section className="techs color_background">
      <h3 className="techs__header text_subtitle underline-p25">Технологии</h3>
      <div className="techs__info">
        <h2 className="techs__title text_title">7 технологий</h2>
        <p className="tech__text text">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <ul className="techs__list text">
        <li className="techs__list-item color_secondary">HTML</li>
        <li className="techs__list-item color_secondary">CSS</li>
        <li className="techs__list-item color_secondary">JS</li>
        <li className="techs__list-item color_secondary">React</li>
        <li className="techs__list-item color_secondary">Git</li>
        <li className="techs__list-item color_secondary">Express.js</li>
        <li className="techs__list-item color_secondary">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
