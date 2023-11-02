import React, { FC, ElementType, forwardRef, RefObject } from "react";
import { useInput } from "../hooks/use-input";

interface inputProps {
  id?: string;
  label?: any;
  type?: string;
  containerClass: string;
  invalidText?: string;
  labelClick?: () => void;
  tag?: ElementType;
  invalidTextClickHandler?: () => void;
  validation: (x: string) => boolean;
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, inputProps>(({ tag: Tag = "input", ...inputProps }, ref) => {
  const invalidTextClickHandler = inputProps.invalidTextClickHandler ? inputProps.invalidTextClickHandler : () => {};

  const { active, blurHandler, changeHandler, clickHandler, containerClass, focusHandler, hasError, isValid, resetValue, value } = useInput(
    { validate: inputProps.validation, className: inputProps.containerClass }
  );

  return (
    <div className={containerClass}>
      {inputProps.label && (
        <label htmlFor={inputProps.id} className={"input__label"} onClick={inputProps.labelClick}>
          {inputProps.label}
        </label>
      )}

      <Tag
        id={inputProps.id || ""}
        type={inputProps.type}
        value={value}
        className={"input__input"}
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        ref={ref}
      />

      <p onClick={invalidTextClickHandler}>{inputProps.invalidText || ""}</p>
    </div>
  );
});

export default Input;
