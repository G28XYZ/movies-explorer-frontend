import successImage from "../../images/success.png";
import deniedImage from "../../images/denied.png";
import { useCallback, useEffect } from "react";

const InfoToolTip = ({ infoToolTip, onClose }) => {
  const handleCloseByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleCloseByEsc);
    return () => {
      document.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [handleCloseByEsc]);

  const { success, message, isOpen } = infoToolTip;

  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
          className="popup__close"
        ></button>
        <img
          className="popup__icon"
          src={success ? successImage : deniedImage}
          alt="Картинка статуса модального окна"
        />
        <h3 className="popup__title">{message}</h3>
      </div>
    </div>
  );
};

export default InfoToolTip;
