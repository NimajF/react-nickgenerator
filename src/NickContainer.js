import { useContext } from "react";
import { nickContext } from "./contexts/nickContext";
import { Generator } from "./Generator";

export function NickContainer() {
    const {nickname} = useContext(nickContext);
    return (
        <div className="container" >
            <div className="nick-container">
                <Generator/>
                <span>{nickname}</span>
            </div>
        </div>
    )
}