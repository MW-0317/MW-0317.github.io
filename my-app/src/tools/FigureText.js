import React from 'react';
import './FigureText.css';

function FigureText( props ) {
    return (
        <div className='fig-text'>
            {props.children}
        </div>
    );
}

export default FigureText;