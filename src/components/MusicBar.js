import React from 'react'
import musicLogo from '../images/musiclogo.svg'
import './styles/MusicBar.css'
function MusicBar() {
    return (
        <div className="MusicBar">
            <div className="container-fluid MusicBar__nest">
                <span className="MusicBar__music"><img src={musicLogo}/> Hans Zimmer - Time</span>
            </div>
        </div>
        
    )
}

export default MusicBar
