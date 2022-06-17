import React, { useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import style from "./Select.module.sass";

export default function MySelect({
  label = "",
  name,
  options,
  callback = null,
}) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState({ id: 0, name: "select option" });

  const handleOutsideClick = () => {
    setActive(false);
  };
  const ref = useOutsideClick(handleOutsideClick);

  const handleSubmit = (e) => {
    active ? setActive(false) : setActive(true);
  };

  const selectOption = (option) => {
    setValue(option);
    setActive(false);
    callback(option);
  };

  return (
    <div className={style.mySelect}>
      <>
        <span className={style.label}>{label}:</span>
        <div
          className={style.fromControl}
          ref={ref}
          onClick={(e) => handleSubmit()}
        >
          <span>{value.id === 0 ? name : value.name}</span>
        </div>
        <div className={`${style['options']} ${active ? style['active'] : ""}`}>
          {options.map((option) => {
            return (
              <div
                className={style.option}
                key={option.id}
                onClick={() => selectOption(option)}
              >
                <span>{option.name}</span>
              </div>
            );
          })}
        </div>
      </>
      <input type="hidden" name={name} value={value.id} />
    </div>
  );
}
