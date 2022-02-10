import { useContext } from "react";
import axios from "axios";
import { capitalize } from "./utils/Strings";
import { nickContext } from "./contexts/nickContext";
import "./Generator.css";

export function Generator(){
    const { setNickname } = useContext(nickContext);
    const generateNick = async () => {
        const fetchData = async (endpoint) => {
            return capitalize((await axios.get(`https://random-word-form.herokuapp.com/random/${endpoint}`)).data[0].replaceAll("-", " ")).replaceAll(" ", "");
        }
        let randomAdjective = await fetchData('adjective');
        let subject = await (Math.floor(Math.random() * 2) ? fetchData('noun') : fetchData('animal'));
        let randomNumber = Math.floor(Math.random() * 999);
        setNickname(`${randomAdjective}${subject}${randomNumber}`);
    }

    return (
        <div className="div-btns" >
            <button className="generate" onClick={generateNick} >Generate</button>
            <button className="reset" onClick={() => setNickname("") }>Reset</button>
        </div>
    )
}