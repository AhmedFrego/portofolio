import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { SBGActions } from "../../store/slices/smartBackground-slice";
import { RootState } from "../../store/store";

import { hand, triangle } from "../../assets/SVGs";

import { textWriter } from "../../util/textEditing";
import SvgButton from "../../components/SvgButton";
import Section from "../../components/layout/Section";

let initial = true;

const bio =
  "Hi, I'm a front-end web developer from Alexandria, Egypt. I enjoy building everything from small business sites to rich interactive apps. If you are a business seeking a web presence or an employer looking to hire you can get in touch with me here.";

const Bio = () => {
  const [bioState, setBioState] = useState("");

  useEffect(() => {
    if (initial) textWriter(bio, 40, setBioState);
    initial = false;
  }, []);



  return (
    <Section name="bio">
          <div className="bio__text">
            <h3 className="bio__text__name" children="ahmed frego" />
            <p className="bio__text__description" children={bioState} />
            {bioState.length === bio.length && <SvgButton text="say hello" svg={hand} alwaysShow />}
          </div>
          <div className="bio__img" children={<img src={require("../../assets/imgs/man.png")} alt="" />} />
    </Section>
  );
};

export default Bio;
