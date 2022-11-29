import React from 'react';
import './TwoColumn.css';

function TwoColumn( {c1, c2} ) {
    return (
        <div className='twocolumn'>
            <div className='column'>
                {c1}
            </div>
            <div className='column'>
                {c2}
            </div>
        </div>
    );
}

export default TwoColumn;