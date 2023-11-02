import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

import { logo as Logo } from "../../assets/logoSvg";

import { MAIN_COLOR, SECONDARY_COLOR } from "../../store/slices/setting-slice";

import SettingAside from "./SettingAside/SettingAside";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const currentSection = useAppSelector((state: RootState) => state.SBGReducer.currentSection?.id);

  const isActive = (id: string) => (currentSection === id ? "header__nav-link header__nav-link--active" : "header__nav-link");
  const navHandler = (id: string, customValue: number = 0) => {
    const target = document.getElementById(id);
    target && window.scrollTo(0, target?.offsetTop + customValue);
  };

  const navigate = useNavigate();

  const logoHandler = () => navigate("/");

  return (
    <header className="header ">
      <nav className="header__nav">
        <ul className="header__nav-links">
          <li className={isActive("bio")} onClick={() => navHandler("bio", -100)} children={"bio"} />
          <li className={isActive("about")} onClick={() => navHandler("about", -250)} children={"about"} />
          <li className={isActive("services")} onClick={() => navHandler("services", -80)} children={"services"} />
          <li className={isActive("sites")} onClick={() => navHandler("sites")} children={"sites"} />
          <li className={isActive("articles")} onClick={() => navHandler("articles")} children={"articles"} />
          <li className={isActive("contacts")} onClick={() => navHandler("contacts")} children={"contacts"} />
        </ul>
      </nav>

      <SettingAside />
      <div className="logo" onClick={logoHandler}>
        <Logo mainColor={MAIN_COLOR} secondaryColor={SECONDARY_COLOR} />
      </div>
    </header>
  );
};

export default Header;
