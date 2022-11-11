import React from 'react';
import './ListItem.css';

function ListItem( {href, title, desc} ) {
    return ( 
        <div className='resource'>
            <a href={href}> {title} </a>
            <p className='rDetail'>
                {desc}
            </p>
        </div>
     );
}

export default ListItem;