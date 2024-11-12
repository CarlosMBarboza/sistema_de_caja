import { desOptions } from "../../db/DesOptions";
import type { Dispatch, SetStateAction } from "react";

type TipDescuentosFormProps = {
  setDes: Dispatch<SetStateAction<number>>;
  des: number;
};

const TipDescuentosForm = ({ setDes, des }: TipDescuentosFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Descuentos:</h3>

      <form>
        {desOptions.map((option) => (
          <div className="flex gap-2 items-center" key={option.id}>
            <label htmlFor={option.id}>{option.label}</label>
            <input
              type="radio"
              id={option.id}
              name="descuento"
              value={option.value}
              onChange={e => setDes(Number(e.target.value))}
              checked={Number(option.value) === des}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipDescuentosForm;
