import React from 'react'
import logo from '../images/chessLogo.png'
import '../learningCss.css';

function Footer () {
        return (
            <div className="footer-container">
                <div className="container">
                    <a href="#" >
                        <img src={logo} className="logo-footer" alt="logo" />
                    </a>
                    <p>"Chess is a battle between your aversion to thinking and your aversion to losing." - redditers</p>
                </div>
            </div>
        )
}

export default Footer;