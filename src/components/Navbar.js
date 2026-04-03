import { useContext } from "react";
import { nickContext } from "../contexts/nickContext";
import "./Navbar.css";

const THEMES = [
  { id: "default", label: "Default" },
  { id: "dracula", label: "Dracula" },
  { id: "glass", label: "Glass" },
  { id: "terminal", label: "Terminal" },
  { id: "old-internet-theme", label: "Old School Internet" },
];

export function Navbar() {
  const { theme, setTheme, setLanguage, language } = useContext(nickContext);

  const handleLanguageChange = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1 className="nav-title">NickGenerator</h1>
        <span className="dice-emoji">🎲</span>
      </div>
      <div className="nav-controls">
        <div className="lang-switcher">
          <span className="lang-label">🌐</span>
          <button className="lang-btn" onClick={handleLanguageChange}>
            {language === "en" ? "EN" : "ES"}
          </button>
        </div>
        <div className="theme-switcher">
          <label htmlFor="theme-select" className="theme-label">
            Theme
          </label>
          <select
            id="theme-select"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="theme-select"
          >
            {THEMES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
