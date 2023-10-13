import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem( {href, title, desc, isFile, imgSrc} ) {
    var inner = (
        <>
            <div className='card-image'>
                <img src={imgSrc} alt="N/A"/>
            </div>
            <div className='card-text'>
                {title}
                <div className='card-detail'>
                    {desc}
                </div>
            </div>
        </>
    )
    return ( 
        <div className='card-resource'>
            {isFile ? <a className='link' href={href}> {inner} </a> : <Link className='link' to={href}> {inner} </Link>}
        </div>
     );
}

export default CardItem;