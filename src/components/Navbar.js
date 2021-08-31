import React from 'react'
import {Link} from 'react-router-dom'
import nasaLogo from '../images/nasalogo.svg'
import './styles/Navbar.css'

function Navbar() {
    return (
        <>
        <div className="Navbar">
            <div className="container-fluid">
                <div className="container Navbar__nest">
                    <Link className="Navbar__item" to="/">
                        <span>Home</span>
                    </Link >
                    <Link className="Navbar__item" to="/news">
                        <span>Item1</span>
                    </Link>
                    <img src={nasaLogo}/>
                    <Link className="Navbar__item" to="/news">
                        <span>Item2</span>
                    </Link>
                    <Link className="Navbar__item" to="/news">
                        <span>Item3</span>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
