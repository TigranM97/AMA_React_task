import { useUnit } from "effector-react";
import { DamageButton, Car, Loader } from "../../components";
import * as model from "../../store";
import { PARTS } from "../costants";
import { useState } from "react";

export const DamageSelectorContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const positions = useUnit(model.$positions);

  const handleComplete = (value: string) => {
    if (positions.includes(value)) {
      const i = positions.indexOf(value);
      positions.splice(i, 1);
      model.postPositionsFx(positions).then(() => setIsLoading(false));
    } else {
      const prevState = [...positions, value];
      model.postPositionsFx(prevState).then(() => setIsLoading(false));
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Car />

          {PARTS.map((part) => {
            const { value, top, left } = part;
            const isActive = positions.includes(value);

            return (
              <DamageButton
                key={value}
                value={value}
                isActive={isActive}
                onComplete={handleComplete}
                position={{ left, top }}
                setIsLoading={setIsLoading}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
