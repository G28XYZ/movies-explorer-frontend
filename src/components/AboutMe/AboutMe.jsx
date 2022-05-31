import { forwardRef } from "react";
import foto from "../../images/profile.jpeg";

const AboutMe = forwardRef((props, ref) => {
  return (
    <section className="about" id="student" ref={ref}>
      <h2 className="about__header text_subtitle underline-pb25">Студент</h2>
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
              <a href="https://vk.com/" className="link" target="_blank" rel="noreferrer">
                ВКонтакте
              </a>
            </li>
            <li>
              <a href="https://github.com/g28xyz" className="link" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about__info-image" src={foto} alt="Фотография студента" />
      </div>
    </section>
  );
});

export default AboutMe;
