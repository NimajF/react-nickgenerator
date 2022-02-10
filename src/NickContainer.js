import { useContext } from "react";
import { nickContext } from "./contexts/nickContext";
import { Generator } from "./Generator";
import "./NickContainer.css"

export function NickContainer() {
    const {nickname} = useContext(nickContext);
    return (
        <div className="container" >
            <div className="nick-container">
                <span className="nickname" >{nickname}</span>
                <Generator/>    
            </div>
        </div>
    )
}