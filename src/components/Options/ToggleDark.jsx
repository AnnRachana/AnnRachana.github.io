import React, { useState } from "react";
import "./ToggleDark.css";

const ToggleDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark-mode");
  };

  return (
    <div className="toggle-container">
      <button className="dark-mode-button" onClick={handleToggle}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default ToggleDark;