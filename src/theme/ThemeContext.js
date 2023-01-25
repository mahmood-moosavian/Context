import React from "react";

export const themes = {
  light: "light",
  dark: ""
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  changeTheme: () => {}
})