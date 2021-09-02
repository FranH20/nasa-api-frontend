/* eslint-disable react/prop-types */
import React, { useState, useEffect} from 'react'
import './styles/Photos.css'
function Photos() {
    const [rover, setRover] = useState([])
    useEffect(() => {
        const getImages = async () => {
            const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2&api_key=OczVmYyBJ0xxnjhkPCqxumaBxR6Y2lYCdqZCsMdF"
            await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            .then(res => res.json())
            .then(res => setRover(res.photos))
        }
        getImages()
    }, [])

    return (
        <div className="Photos">
            <div className="Photos__nest">
                {rover.map(data => <img key={data.id} src={data.img_src} className="img-thumbnail Photos__image" alt="..." />)}
            </div>
        </div>
    )
}

export default Photos
