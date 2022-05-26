function Footer() {
  return (
    <section className="footer">
      <h3 className="footer__title text color_text underline-p20">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__row">
        <p className="text">&#169; 2020</p>
        <nav>
          <ul className="footer__list text">
            <li>
              <a href="/#" className="footer__link">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Github
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Footer;
