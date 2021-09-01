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
                        <span>Articles</span>
                    </Link >
                    <Link className="Navbar__item" to="/news">
                        <span>Photos & Videos</span>
                    </Link>
                    <img className="Navbar__img" src={nasaLogo}/>
                    <Link className="Navbar__item" to="/news">
                        <span>Our mission</span>
                    </Link>
                    <Link className="Navbar__item" to="/news">
                        <span>Contact us</span>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
