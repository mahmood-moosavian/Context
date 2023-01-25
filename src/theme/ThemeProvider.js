import React, { useEffect, useState } from "react";
import { ThemeContext, themes } from "./ThemeContext";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  const changeTheme = (theme) => {
    setTheme(theme);
    console.log(theme);
  };

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add("light");
        break;
      case themes.dark:
        document.body.classList.remove("light");
        break;
      default:
        document.body.classList.remove("light");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
