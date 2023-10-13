import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem( {href, title, desc, isFile, imgSrc} ) {
    return (
        <div className='card-resource'>
            <div className='card-image'>
                <img src={imgSrc} alt="N/A"/>
            </div>
            <div className='card-text'>
                {isFile ? <a className='link' href={href}> {title} </a> : <Link className='link' to={href}> {title} </Link>}
                <div className='card-detail'>
                    {desc}
                </div>
            </div>
        </div>
     );
}

export default CardItem;