import React from "react";

interface key {
  value: string;
  extraClass?: string;
}

const keys: key[] = [
  { value: "~" },
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "7" },
  { value: "8" },
  { value: "9" },
  { value: "0" },
  { value: "-" },
  { value: "+" },
  { value: " ←", extraClass: "delete" },
  { value: "Tab", extraClass: "tab" },
  { value: "Q" },
  { value: "W" },
  { value: "E" },
  { value: "R" },
  { value: "T" },
  { value: "Y" },
  { value: "U" },
  { value: "I" },
  { value: "O" },
  { value: "P" },
  { value: "[" },
  { value: "]" },
  { value: "\\", extraClass: "backslash" },
  { value: "⇪ CpsLk", extraClass: "capslock" },
  { value: "A" },
  { value: "S" },
  { value: "D" },
  { value: "F" },
  { value: "G" },
  { value: "H" },
  { value: "J" },
  { value: "K" },
  { value: "L" },
  { value: ";" },
  { value: "'" },
  { value: "Enter →", extraClass: "return" },
  { value: "⇧ Shift", extraClass: "leftshift" },
  { value: "Z" },
  { value: "X" },
  { value: "C" },
  { value: "V" },
  { value: "B" },
  { value: "N" },
  { value: "M" },
  { value: "," },
  { value: "." },
  { value: "/" },
  { value: "Shift ⇧", extraClass: "rightshift" },
  { value: "Ctrl", extraClass: "leftctrl" },
  { value: "Alt" },
  { value: "CMD", extraClass: "command" },
  { value: "", extraClass: "space" },
  { value: "Alt" },
  { value: "Fn" },
  { value: " CMD", extraClass: "command" },
  { value: "Ctrl" },
];

const Keyboard = () => {
  return (
    <div className="keyboard">
      {keys.map((key: key) => (
        <span
          key={key.value + Math.random()}
          className={"keyboard__key " + (key.extraClass ? "keyboard__key--" + key.extraClass : "")}
          children={key.value}
        />
      ))}
    </div>
  );
};

export default Keyboard;
