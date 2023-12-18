import React from "react";
import carImg from "../../assets/car-img.png";
import "../style.css";

export const Car: React.FC<{}> = () => {
  return (
    <div className="car-component">
      <img src={carImg} width={1000} height={500} alt="car-img" />;
    </div>
  );
};
