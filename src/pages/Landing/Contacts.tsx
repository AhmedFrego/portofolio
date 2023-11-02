import React, { FormEvent, useRef } from "react";
import Input from "../../components/Input";

import SvgButton from "../../components/SvgButton";

import { paperPlane } from "../../assets/SVGs";
import Section from "../../components/layout/Section";

import { validateEmail } from "../../util/isEmail";

const Contacts = () => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameIsVaild = nameValidation(nameInputRef.current?.value || "");
    const emailIsVaild = emailValidation(emailInpurRef.current?.value || "");
    const messageIsVaild = messageValidation(messageInputRef.current?.value || "");
    console.log(nameIsVaild, emailIsVaild, messageIsVaild);
  };

  const nameInputRef = useRef<HTMLInputElement>(null);
  const nameValidation = (name: string) => name.length > 2;

  const emailInpurRef = useRef<HTMLInputElement>(null);
  const emailValidation = (email: string) => validateEmail(email);

  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const messageValidation = (message: string) => message.length > 3;

  return (
    <Section name="contacts" title className="spiked">
      <h3>
        Thanks for taking the time to reach out. <br /> How can I help you today?
      </h3>
      <form action="#" className="contacts" onSubmit={(e) => submitHandler(e)}>
        <Input ref={nameInputRef} validation={nameValidation} containerClass="input" id="name" label={"Name"} />
        <Input ref={emailInpurRef} validation={emailValidation} containerClass="input" id="email" label={"Email"} />
        <Input
          ref={messageInputRef}
          validation={messageValidation}
          containerClass="input input--message"
          tag={"textarea"}
          id="message"
          label={"Your Message"}
        />
        <SvgButton type="submit" svg={paperPlane} text={"send"} />
      </form>
    </Section>
  );
};

export default Contacts;
