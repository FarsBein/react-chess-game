import React from 'react'
import logo from '../images/ChessLogo.png'
import '../App.css';

function Footer () {
        return (
            <div>
                <footer>
                    <img src={logo} className="logo" alt="logo" />
                    <p>"Chess is a battle between your aversion to thinking and your aversion to losing." - redditers</p>
                </footer>
            </div>
        )
}

export default Footer;