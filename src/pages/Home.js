import { underline } from 'chalk'
import React from 'react'
import astronautLogo from '../images/astronautImage.svg'
import './styles/Home.css'
function Home() {
    return (
        <div className="Home">
            <img className="Home__image" src={astronautLogo}/>
            <div className="Home__letters">
                <h1>NASA API</h1>
                <span>sky is <underline>not</underline> the limit</span>
            </div>
            
        </div>
    )
}

export default Home
