import { useContext, useState } from "react";
import { nickContext } from "./contexts/nickContext";
import { Generator } from "./Generator";
import "./NickContainer.css";

export function NickContainer() {
  const { nickname, setNickname, click, setClick } = useContext(nickContext);
  const [userText, setUserText] = useState("");

  const provideText = () => {
    setNickname("");
    setClick(true);
    setUserText("");
  };

  const handleChange = (evt) => {
    setUserText(evt.target.value);
  };

  return (
    <div className="container">
      <div className="nick-container">
        <div className="nickname-div">
          <span className="nickname" key={nickname}>
            {nickname}
          </span>
        </div>
        <input
          type="text"
          className="provide-text"
          maxLength={10}
          onChange={handleChange}
          disabled={!click}
          style={
            click
              ? {
                  opacity: 1,
                  transform: "translateY(-30px)",
                  marginTop: "2rem",
                }
              : {}
          }
          value={userText}
        />
        <button
          className={click ? "provide clicked" : "provide"}
          onClick={provideText}
        >
          Provide
        </button>
        <Generator provideText={userText} open={click} />
        <button className="copy-button" onClick={() => navigator.clipboard.writeText(nickname)}>
          Copy to Clipboard!
        </button>
      </div>
    </div>
  );
}
