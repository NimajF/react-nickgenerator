import { createContext, useState } from "react";

export const nickContext = createContext();

export function NickProvider(props) {
  const [nickname, setNickname] = useState("");
  const [click, setClick] = useState(false);
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("default");

  return (
    <nickContext.Provider
      value={{
        nickname,
        setNickname,
        click,
        setClick,
        message,
        setMessage,
        language,
        setLanguage,
        theme,
        setTheme,
      }}
    >
      {props.children}
    </nickContext.Provider>
  );
}
