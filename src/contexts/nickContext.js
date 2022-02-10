import { createContext, useState } from "react";

export const nickContext = createContext();

export function NickProvider(props){
    const [nickname, setNickname] = useState("");
    const [click, setClick] = useState(false)

    return (
        <nickContext.Provider value={{nickname, setNickname, click, setClick}}>
            {props.children}
        </nickContext.Provider>
    )
}
