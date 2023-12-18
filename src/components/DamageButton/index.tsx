import React from "react";
import "../style.css";

interface Props {
  value: string;
  isActive: boolean;
  position: {
    top: number;
    left: number;
  };
  onComplete: (arg: string) => void;
  setIsLoading: (arg: boolean) => void;
}

export const DamageButton: React.FC<Props> = ({
  value,
  position,
  onComplete,
  isActive,
  setIsLoading,
}) => {
  const backgroundColor = isActive ? "orange" : "white";

  const handleClick = () => {
    setIsLoading(true);
    onComplete(value);
  };

  return (
    <div
      style={{ backgroundColor, top: position.top, left: position.left }}
      className="circle"
      role="button"
      onClick={handleClick}
    />
  );
};
