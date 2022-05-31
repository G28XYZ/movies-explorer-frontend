const NavBar = ({ handleButtonClick }) => {
  return (
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
  );
};

export default NavBar;
