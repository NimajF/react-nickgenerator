import { createContext, useState } from "react";

export const nickContext = createContext();

export function NickProvider(props){
    const [nickname, setNickname] = useState("");

    return (
        <nickContext.Provider value={{nickname, setNickname}}>
            {props.children}
        </nickContext.Provider>
    )
}
