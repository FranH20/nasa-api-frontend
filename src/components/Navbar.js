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
                    <Link className="Navbar__item" to="/notice">
                        <span>Articles</span>
                    </Link >
                    <Link className="Navbar__item" to="/photos">
                        <span>Photos & Videos</span>
                    </Link>
                    <Link to='/'>
                        <img className="Navbar__img" src={nasaLogo}/>    
                    </Link>
                    <Link className="Navbar__item" to="/">
                        <span>Our mission</span>
                    </Link>
                    <Link className="Navbar__item" to="/">
                        <span>Contact us</span>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
