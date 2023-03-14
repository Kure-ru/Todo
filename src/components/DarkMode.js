import "../DarkMode.css";

import { useState } from "react";

import iconMoon from "../assets/icon-moon.svg"
import iconSun from "../assets/icon-sun.svg"


// const prefersDark =
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches;

// const defaultDark =
//   storedTheme === "dark" || (storedTheme === null && prefersDark);

// if (defaultDark) {
//   setDark();
// }



const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        if (!darkMode) {
          setDark();
        } else {
          setLight();
        }
      };

    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        setDarkMode(true)
        console.log(darkMode)
    }
    
    const setLight= () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        setDarkMode(false)
        console.log(darkMode)
    }
    
    const storedTheme = localStorage.getItem("theme");

  return (
    <div className="top__icon">
        <button onClick={toggleTheme}>
      <img src={storedTheme === 'dark' ? iconMoon : iconSun} alt="moon indicating night mode button" />
      </button>
    </div>
  );
};

export { DarkMode };
