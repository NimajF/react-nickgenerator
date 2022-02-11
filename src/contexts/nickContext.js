import { createContext, useState } from "react";

export const nickContext = createContext();

export function NickProvider(props){
    const [nickname, setNickname] = useState("");
    const [click, setClick] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <nickContext.Provider value={{nickname, setNickname, click, setClick, message, setMessage}}>
            {props.children}
        </nickContext.Provider>
    )
}
