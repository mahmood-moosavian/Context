import React, { useContext, useState } from "react";
import { ThemeContext, themes } from "./theme/ThemeContext";
function App() {
  const { changeTheme } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          setDarkMode(!darkMode);
          changeTheme(darkMode ? themes.light : themes.dark);
        }}
      >
        change theme
      </button>
    </div>
  );
}

export default App;
