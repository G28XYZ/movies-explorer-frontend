import successImage from "../../images/success.png";
import deniedImage from "../../images/denied.png";

const InfoToolTip = ({ isOpen, infoRegister, onClose }) => {
  const { isRegister, message } = infoRegister;
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container" style={{ textAlign: "center" }}>
        <button
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
          className="popup__close"
        ></button>
        <img
          className="popup__icon"
          src={isRegister ? successImage : deniedImage}
          alt="Картинка модального окна"
          style={{ paddingTop: 24, paddingBottom: 32 }}
        />
        <h3 className="popup__title" style={{ paddingBottom: 25 }}>
          {message}
        </h3>
      </div>
    </div>
  );
};

export default InfoToolTip;
