function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title text color_text underline-pb20">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__row">
        <p className="text color_text">&#169; 2022</p>
        <nav>
          <ul className="footer__list text">
            <li>
              <a
                href="https://practicum.yandex.ru/profile/web"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Yandex-Practicum"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://vk.com/yandex.practicum"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                ВКонтакте
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
