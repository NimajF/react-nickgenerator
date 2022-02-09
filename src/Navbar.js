import "./Navbar.css";

export function Navbar() {
    return <div className="navbar" >
        <h1>React NickGenerator</h1>
        <div>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider"/>
            </label>
        </div>
        
        
    </div>
}