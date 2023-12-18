import React from "react";
import "../style.css";

export const Loader: React.FC<{}> = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};
