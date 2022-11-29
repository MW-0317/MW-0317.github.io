import React from 'react';
import Tab from './Tab';

function P( props ) {
    return (
        <>
            <p><Tab/>{props.children}</p>
        </>
    );
}

export default P;