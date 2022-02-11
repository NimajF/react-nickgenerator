import { useContext } from "react";
import axios from "axios";
import { capitalize } from "./utils/Strings";
import { nickContext } from "./contexts/nickContext";
import { randomMessage } from "./utils/Messages";
import "./Generator.css";

export function Generator(props){
    const { setNickname, setClick, setMessage } = useContext(nickContext);
    const generateNick = async () => {
        const fetchData = async (endpoint) => {
            return capitalize((await axios.get(`https://random-word-form.herokuapp.com/random/${endpoint}`)).data[0].replaceAll("-", " ")).replaceAll(" ", "");
        }
        let randomAdjective = await fetchData('adjective');
        let subject = await (Math.floor(Math.random() * 2) ? fetchData('noun') : fetchData('animal'));
        let randomNumber = Math.floor(Math.random() * 999);
        setMessage(randomMessage())
        props.open ? setNickname(`${props.provideText}${subject}${randomNumber}`) : setNickname(`${randomAdjective}${subject}${randomNumber}`);
    }

    const reset = () => {
        setNickname("");
        setClick(false);
    }

    return (
        <div className="div-btns" >
            <button className="generate" onClick={generateNick} >Generate</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}