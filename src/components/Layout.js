/* eslint-disable react/prop-types */
import React from 'react'
import Navbar from './Navbar'
import MusicBar from './MusicBar'

function Layout(props) {
    return (
        <>
            <MusicBar />
            <Navbar />            
            {props.children}
        </>
    )
}

export default Layout
