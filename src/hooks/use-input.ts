import { FormEvent, useState, useCallback, useEffect } from "react";

export const useInput = (options: { validate: (x: any) => boolean | void; className?: string; startValue?: string }) => {
  const [value, setValue] = useState(options.startValue || "");
  const [containerClass, setContainerClass] = useState(options.className);

  const [touched, setTouced] = useState(false);
  const [active, setactive] = useState(false);
  const hasError = !options.validate(value) && touched;

  const changeHandler = (e: FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  useEffect(() => {
    if (value) setContainerClass(`${options.className} input--active ${!options.validate(value) ? "input--invalid" : ""} ")`);
  }, [value, options]);

  const clickHandler = () => setactive(true);

  const focusHandler = () => {
    setactive(true);
    setContainerClass(options.className + " input--active ");
  };
  const resetValue = useCallback((x: string = "") => {
    setValue(x);
    setTouced(false);
  }, []);

  const blurHandler = () => {
    setTouced(true);
    setactive(false);
    if (!value) setContainerClass(options.className);
    if (!options.validate(value)) setContainerClass((options.className += " input--invalid "));
  };

  return {
    value,
    active,
    hasError,
    isValid: options.validate(value),
    blurHandler,
    changeHandler,
    focusHandler,
    resetValue,
    clickHandler,
    containerClass,
  };
};
