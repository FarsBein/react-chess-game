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
                            <ul className="menu-tab">
                                {/* <li><a href="#">Board</a></li>
                                <li><a href="#">About</a></li> */}
                            </ul>
                        </nav>                
                </header>
            </div>
        )
}

export default Navbar;