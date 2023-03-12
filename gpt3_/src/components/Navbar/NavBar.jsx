import React from "react";
import './navbar.css'
import Logo from '../../assets/logo.svg'



const NavBar = () => {
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-logo_links">
                <div className="gpt3__navbar-logo">
                    <img src={Logo} alt="Website Logo" />
                </div>

                <div className="gpt3__navbar-links">
                    <ul>
                        <li>Home</li>
                        <li>What Is GPT3</li>
                        <li>Open AI</li>
                        <li>Case Studies</li>
                        <li>Library</li>
                    </ul>
                </div>
            </div>
            
            <div className="gpt3__navbar-btn">
                <p>Sign in</p>
                <div className="gpt3__navbar-btn_signup">
                    <button type="button"> Sign up</button>
                </div>
            </div>
        </div>
    )
}


export default NavBar