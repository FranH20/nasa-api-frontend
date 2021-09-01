/* eslint-disable react/prop-types */
import React from 'react'
import './styles/NoticeCard.css'

function NoticeCard({title, portal, date, author, description}) {
    return (
        <div className="NoticeCard">
            <h1 className="NoticeCard__title">{title}</h1>
            <img className="NoticeCard__image" src={portal}/>
            <div className="NoticeCard__info">
                <span>Author: {author ? author : 'None'}</span>
                <span>{date}</span>
            </div>
            <p className="NoticeCard__paragraph">{description}</p>
        </div>
    )
}

export default NoticeCard
