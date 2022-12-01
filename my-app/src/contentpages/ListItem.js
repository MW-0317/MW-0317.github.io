import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

function ListItem( {href, title, desc, isFile} ) {
    return ( 
        <div className='resource'>
            {isFile ? <a className='link' href={href}> {title} </a> : <Link className='link' to={href}> {title} </Link>}
            <p className='rDetail'>
                {desc}
            </p>
        </div>
     );
}

export default ListItem;