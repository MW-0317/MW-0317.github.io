import React from 'react';
import './Callout.css';

function Callout( props ) {
    return ( 
        <div className='callout'>
            {props.children}
        </div>
     );
}

export default Callout;