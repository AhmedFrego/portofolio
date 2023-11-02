import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const MAIN_COLOR = "var(--color-main)";
export const SECONDARY_COLOR = "var(--color-secondary)";
// #f44336,#e91e63,#9c27b0,#673ab7, #3f51b5,#2196f3,#03a9f4,#00bcd4,#607d8b,#9e9e9e,#795548,#ff5722,,#ff9800,#ffc107,#ffeb3b,#cddc39,#8bc34a,#4caf50,#009688

const changeRoot = (propertyName: string, value: string) => document.documentElement.style.setProperty(propertyName, value);
const themeColors: { dark: themeColorType; light: themeColorType } = {
  light: {
    theme: "#fff",
    themeRgb: "255,255,255",
    themeInverse: "#000",
    themeInverseRgb: "0,0,0",
    themeGrey: "#ddd",
    themeGreyRgb: "68, 68, 68",
    themeInverseGrey: "#444",
    themeInverseGreyRgb: "187,187,187",
  },
  dark: {
    theme: "#000",
    themeRgb: "0,0,0",
    themeInverse: "#fff",
    themeInverseRgb: "255,255,255",
    themeGrey: "#444",
    themeGreyRgb: "187,187,187",
    themeInverseGrey: "#ddd",
    themeInverseGreyRgb: "68, 68, 68",
  },
};

// INITIALIZING THEMES
interface themeColorType {
  theme: string;
  themeInverse: string;
  themeRgb: string;
  themeInverseRgb: string;
  themeInverseGrey: string;
  themeGrey: string;
  themeInverseGreyRgb: string;
  themeGreyRgb: string;
}
interface themesClass {
  isDark: boolean;
  colors: themeColorType;
}
const initialThemes: themesClass = {
  isDark: false,
  colors: themeColors.light,
};

const localTheme = localStorage.getItem("theme");
if (localTheme) {
  const parsedTheme = JSON.parse(localTheme) as themesClass;
  if (parsedTheme.isDark) {
    initialThemes.isDark = parsedTheme.isDark;
    initialThemes.colors = themeColors.dark;
  }
}

changeRoot("--color-theme", initialThemes.colors.theme);
changeRoot("--color-theme-inv", initialThemes.colors.themeInverse);
changeRoot("--color-theme-rgb", initialThemes.colors.themeRgb);
changeRoot("--color-theme-inv-rgb", initialThemes.colors.themeInverseRgb);
changeRoot("--color-theme-inv-grey", initialThemes.colors.themeInverseGrey);
changeRoot("--color-theme-grey", initialThemes.colors.themeGrey);
changeRoot("--color-theme-inv-grey-rgb", initialThemes.colors.themeInverseGreyRgb);
changeRoot("--color-theme-grey-rgb", initialThemes.colors.themeGreyRgb);

// INITIALIZING COLORS
interface colorsClass {
  allcolors: string[];
  mainColor: string;
  secondaryColor: string;
}
const initialColors: colorsClass = {
  allcolors: [
    "#d61c4e",
    "#feb139",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#607d8b",
    "#9e9e9e",
    "#795548",
    "#ff5722",
    "#ff9800",
    "#ffc107",
    "#ffeb3b",
    "#cddc39",
    "#8bc34a",
    "#4caf50",
    "#009688",
  ],
  mainColor: "#feb139",
  secondaryColor: "#d61c4e",
};

const localColors = localStorage.getItem("colors");
if (localColors) {
  const parsedColors = JSON.parse(localColors) as colorsClass;
  if (parsedColors.mainColor) initialColors.mainColor = parsedColors.mainColor;
  if (parsedColors.secondaryColor) initialColors.secondaryColor = parsedColors.secondaryColor;
  if (parsedColors.allcolors) initialColors.allcolors.push(...parsedColors.allcolors);
}
// changeRoot("--color-secondary", initialColors.secondaryColor);
// changeRoot("--color-main", initialColors.mainColor);

// INITIALIZING FONTS

interface fontsType {
  fonts: string[];
  activeFont: string;
  size: string;
}

const initialFonts: fontsType = {
  fonts: ["cairo", "cursive", "fantasy", "monospace", "sans-serif", "serif"],
  activeFont: "",
  size: "62.5%",
};

let localfonts = localStorage.getItem("fonts");
if (localfonts) {
  const parsedFonts = JSON.parse(localfonts) as fontsType;
  if (parsedFonts.activeFont) initialFonts.activeFont = parsedFonts.activeFont;
  if (parsedFonts.size) initialFonts.size = parsedFonts.size;
}

const html = document.getElementsByTagName("html")[0] as HTMLHtmlElement;
html.style.setProperty("font-family", `${initialFonts.activeFont} , serif`);
html.style.setProperty("font-size", initialFonts.size);

// INITIAL STATE
interface initialStateType {
  isOpen: boolean;
  theme: themesClass;
  colors: colorsClass;
  tryColor: [main: boolean, color: string | null];
  fonts: fontsType;
}

const initialState: initialStateType = {
  isOpen: false,
  colors: { ...initialColors, allcolors: [...new Set(initialColors.allcolors)] },
  theme: initialThemes,
  tryColor: [true, null],
  fonts: initialFonts,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState: initialState,
  reducers: {
    toggleAside: (state) => {
      state.isOpen = !state.isOpen;
    },
    //THEME ACTIONS

    toggleDarkMode: (state) => {
      state.theme.isDark = !state.theme.isDark;
      state.theme.isDark ? (state.theme.colors = themeColors.dark) : (state.theme.colors = themeColors.light);
      localStorage.setItem("theme", JSON.stringify(state.theme));

      changeRoot("--color-theme", state.theme.colors.theme);
      changeRoot("--color-theme-inv", state.theme.colors.themeInverse);
      changeRoot("--color-theme-rgb", state.theme.colors.themeRgb);
      changeRoot("--color-theme-inv-rgb", state.theme.colors.themeInverseRgb);
      changeRoot("--color-theme-inv-grey", state.theme.colors.themeInverseGrey);
      changeRoot("--color-theme-grey", state.theme.colors.themeGrey);
      changeRoot("--color-theme-inv-grey-rgb", state.theme.colors.themeInverseGreyRgb);
      changeRoot("--color-theme-grey-rgb", state.theme.colors.themeGreyRgb);
    },

    //COLORS ACTIONS
    changeColor: (state, action: { payload: [which: "main" | "secondary", to: string] }) => {
      const colorsSet = new Set(state.colors.allcolors);
      if (action.payload[0] === "main") {
        localStorage.setItem("colors", JSON.stringify({ ...state.colors, colors: colorsSet, mainColor: action.payload[1] }));
        state.colors.mainColor = action.payload[1];
      } else {
        localStorage.setItem("colors", JSON.stringify({ ...state.colors, colors: colorsSet, secondaryColor: action.payload[1] }));
        state.colors.secondaryColor = action.payload[1];
      }

      changeRoot(action.payload[0] === "main" ? "--color-main" : "--color-secondary", action.payload[1]);
    },

    toggleTryColor: (state) => {
      state.tryColor[0] = !state.tryColor[0];
    },
    tryColor: (state, action: PayloadAction<string | null>) => {
      if (action.payload)
        if (state.tryColor[0]) changeRoot("--color-main", action.payload);
        else changeRoot("--color-secondary", action.payload);
      else {
        changeRoot("--color-main", state.colors.mainColor);
        changeRoot("--color-secondary", state.colors.secondaryColor);
        state.tryColor[1] = null;
      }
    },
    confirmTryColor: (state, action: { payload: string }) => {
      if (!state.colors.allcolors.includes(action.payload)) state.colors.allcolors.push(action.payload);
    },
    // FONTS ACTIONS

    changeActiveFont: (state, action: PayloadAction<string>) => {
      localStorage.setItem("fonts", JSON.stringify({ ...state.fonts, activeFont: action.payload } as fontsType));
      state.fonts.activeFont = action.payload;
      html.style.fontFamily = `${action.payload} `;
    },
    changeFontSize: (state, action: PayloadAction<number>) => {
      const percentageValue = action.payload / 0.16 + "%";
      localStorage.setItem("fonts", JSON.stringify({ ...state.fonts, size: percentageValue } as fontsType));
      html.style.fontSize = percentageValue;
    },
  },
});

export default settingSlice.reducer;

export const settingActions = settingSlice.actions;
