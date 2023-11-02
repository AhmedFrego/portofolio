import { Dispatch, SetStateAction } from "react";

let writer: any;

export const textWriter = (text: string, time: number, setter: Dispatch<SetStateAction<string>>) => {
  let i = 0;

  setter("");
  writer = setInterval(() => {
    for (let index = i; index === i && index < text.length; index++) setter((perv: string) => perv + text[index]);
    i < text.length ? i++ : clearInterval(writer);
  }, time);
};

export const textEreaser = (text: string, time: number, setter: any) => {
  clearInterval(writer);
  let i = text.length;
  const ereaser = setInterval(() => {
    for (let index = i; index === i && index !== 0; index++) setter((perv: string) => perv.slice(0, perv.length - 1));
    i > 0 ? i-- : clearInterval(ereaser);
  }, time);
};
