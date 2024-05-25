import { useState, useEffect } from "react";
import Particles from "react-particles-js";
import { ParticlesParams } from "../Schemas/Particles";

export const Options = () => {
  var { lsTheme, lsIcon } = "";
  try {
    lsTheme = localStorage.getItem("theme");
    lsIcon = localStorage.getItem("icon");
  } catch (e) {
    console.error(`All Cookies blocked - Error: ${e.message}`);
  }

  const [theme, setTheme] = useState(lsTheme || "dark");
  const [icon, setIcon] = useState(lsIcon || "bx-moon");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("icon", icon);
    document.body.classList[theme === "dark" ? "add" : "remove"]("dark-theme");
  }, [theme, icon]);

  const _toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    icon === "bx-sun" ? setIcon("bx-moon") : setIcon("bx-sun");
  };

  return (
    <div className="home__options no-print" id="resume__options">
      <Particles params={ParticlesParams} />
      <i
        className={`bx ${icon} change-theme`}
        title="Toggle Theme"
        id="theme-button"
        onClick={_toggleTheme}
      />
    </div>
  );
};
