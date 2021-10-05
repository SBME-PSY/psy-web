import React from "react"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = ()=>{
    return(
        <header className="mt-5" id="introduction">
            <div id="container">
                <h1 id="Company-name" className="text-white">Psy-Awareness</h1>
                <h2 id="moto" className="text-white text-center">A Personal Psychiatrist at the Palm of your hand</h2>
            </div>
        </header>
    )
}
export default Header;