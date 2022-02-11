import { useContext, useState } from "react";
import { nickContext } from "./contexts/nickContext";
import { Generator } from "./Generator";
import "./NickContainer.css";

export function NickContainer() {
  const { nickname, setNickname, click, setClick } = useContext(nickContext);
  const [userText, setUserText] = useState("");
  const [copy, setCopy] = useState(false);
  const [message, setMessage] = useState("");

  const provideText = () => {
    setNickname("");
    setClick(true);
    setUserText("");
  };

  const handleChange = (evt) => {
    setUserText(evt.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(nickname);
    setCopy(true);
    setMessage(message);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <div className="container">
      <div className="nick-container">
        <div className={copy ? "overlay show" : "overlay"}>
          <h2>COPIED</h2>
          <span className="copied-nickname">{nickname}</span>
          {click && copy ? <p className="message">{message}</p> : null}
        </div>
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
          placeholder={"Write something..."}
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
        <button
          className="copy-button"
          onClick={copyToClipboard}
          disabled={!nickname}
        >
          Copy to Clipboard!
        </button>
      </div>
    </div>
  );
}
