import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

function ListItem( {href, title, desc, isFile} ) {
    return ( 
        <div className='resource'>
            {isFile ? <a className='link' href={href}> {title} </a> : <Link className='link' to={href}> {title} </Link>}
            <div className='rDetail'>
                {desc}
            </div>
        </div>
     );
}

export default ListItem;