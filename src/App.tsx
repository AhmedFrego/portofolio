import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/sass/main.scss";
import Landing from "./pages/Landing/Landing";
import Layout from "./components/layout/Layout";

import { spike } from "./util/spiked";
import { currentSection } from "./util/current-section";

import { RootState } from "./store/store";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { SBGActions } from "./store/slices/smartBackground-slice";
import Slider from "./components/UI/HexSlider";

function App() {
  const targetSection = useAppSelector((state: RootState) => state.SBGReducer.currentSection);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(SBGActions.changeCurrentSection(currentSection()));
    spike();
    window.addEventListener("resize", spike);
  }, [dispatch]);

  useEffect(() => {
    const SBGHandler = () => {
      if (currentSection() !== targetSection) dispatch(SBGActions.changeCurrentSection(currentSection()));
    };
    window.addEventListener("scroll", SBGHandler);
    return () => window.removeEventListener("scroll", SBGHandler);
  }, [dispatch, targetSection]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="*" element={<div className="landing colorful">hi there</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
