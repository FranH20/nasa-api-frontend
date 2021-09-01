import React, {useState, useEffect} from 'react'
import NoticeCard from '../components/NoticeCard'
import './styles/Notice.css'
function Notice() {
    const [notice, setNotice] = useState([])

    useEffect(() => { 
        const loadNotice = async () => {
            const url = "https://api.nasa.gov/planetary/apod?api_key=OczVmYyBJ0xxnjhkPCqxumaBxR6Y2lYCdqZCsMdF"
            await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(res => res.json())
            .then(res => {
                setNotice(res)
            })

        }
        loadNotice()
    }, [])

    return (
        <div className="Notice">
            <div className="Notice__nest">
                <NoticeCard 
                key={Math.random} 
                title={notice.title} portal={notice.hdurl} date={notice.date} 
                author={notice.copyright} description={notice.explanation}/>
            </div>
        </div>
    )
}

export default Notice
