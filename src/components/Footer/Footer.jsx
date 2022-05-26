function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title text color_text underline-p20">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__row">
        <p className="text">&#169; 2020</p>
        <nav>
          <ul className="footer__list text">
            <li>
              <a href="/#" className="link">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a href="/#" className="link">
                Github
              </a>
            </li>
            <li>
              <a href="/#" className="link">
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
