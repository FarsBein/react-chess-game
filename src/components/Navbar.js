import React from 'react'
import logo from '../images/ChessLogo.png'
import menuIcon from '../images/menu.png'
import '../App.css';

function Navbar () {
        return (
            <div>
                <header>
                        <img className="logo" src={logo} alt="logo" />
                        <nav>
                            {/* <img src={menuIcon} alt="toggle menu" className="menu" id="menu" /> */}
                            <ul className="menu-tab">
                                <li><a href="#">New Game</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </nav>                
                </header>
            </div>
        )
}

export default Navbar;