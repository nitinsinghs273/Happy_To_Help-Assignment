import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const ButtonWithArrow = ({ buttonText, additionalInfo }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="button-with-arrow">
      <button
        className={`info-button ${showInfo ? "active" : ""}`}
        onClick={toggleInfo}
      >
        {buttonText}
        <FaAngleDown className="arrow-icon" />
      </button>
      {showInfo && <div className="additional-info">{additionalInfo}</div>}
    </div>
  );
};

export default ButtonWithArrow;
