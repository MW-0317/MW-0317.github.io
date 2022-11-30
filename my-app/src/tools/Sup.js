import React, { useState } from 'react';

import './Sup.css';

function Sup( {refId, children} ) {
    const [isMarked, setIsMarked] = useState(false);

    
    const executeScroll = () => {
        const el = document.getElementById(refId);
        el.scrollIntoView({behavior: "smooth"});
        setIsMarked(c => !c);
        console.log(isMarked);
    }

    // useMountEffect(executeScroll);


    return (
        <>
            <sup><button className='sup' onClick={executeScroll}>{children}</button></sup>
        </>
    );
}

export default Sup;