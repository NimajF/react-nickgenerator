import { useContext } from "react";
// import axios from "axios";
// import { capitalize } from "../utils/Strings";
import { nickContext } from "../contexts/nickContext";
import { randomMessage } from "../utils/Messages";
import { nickDictionaryEn, nickDictionaryEs } from "../utils/nickDictionary";
import "./Generator.css";

export function Generator(props) {
  const { setNickname, setClick, setMessage, language } =
    useContext(nickContext);

  // API not working. Using local data instead.

  const generateNick = () => {
    const nickDictionary =
      language === "en" ? nickDictionaryEn : nickDictionaryEs;
    let randomAdjective =
      nickDictionary.adjectives[
        Math.floor(Math.random() * nickDictionary.adjectives.length)
      ];
    let subject =
      nickDictionary.nouns[
        Math.floor(Math.random() * nickDictionary.nouns.length)
      ];
    let randomNumber = Math.floor(Math.random() * 999);
    setMessage(randomMessage());
    props.open
      ? setNickname(`${props.provideText}${subject}${randomNumber}`)
      : setNickname(`${randomAdjective}${subject}${randomNumber}`);
  };

  // const generateNick = async () => {
  //     const fetchData = async (endpoint) => {
  //         return capitalize((await axios.get(`https://random-word-form.herokuapp.com/random/${endpoint}`)).data[0].replaceAll("-", " ")).replaceAll(" ", "");
  //     }
  //     let randomAdjective = await fetchData('adjective');
  //     let subject = await (Math.floor(Math.random() * 2) ? fetchData('noun') : fetchData('animal'));
  //     let randomNumber = Math.floor(Math.random() * 999);
  //     setMessage(randomMessage())
  //     props.open ? setNickname(`${props.provideText}${subject}${randomNumber}`) : setNickname(`${randomAdjective}${subject}${randomNumber}`);
  // }

  const reset = () => {
    setNickname("");
    setClick(false);
  };

  return (
    <div className="div-btns">
      <button className="generate" onClick={generateNick}>
        Generate
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
