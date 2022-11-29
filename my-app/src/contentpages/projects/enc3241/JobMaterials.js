import React from 'react';

import rc from './src/ResumeAndCover.pdf';
import Project from '../Project';

function JobMaterials() {
    return ( 
        <Project>
            <div className='jobmat'>
                <h1>
                    Job Materials
                </h1>
                <h2>
                    Unrevised Job Materials
                </h2>
                <p>
                    Below are my unrevised (current) job materials, including my resume and cover letter.
                </p>
                <iframe src={rc} title="Instructions" width="100%" height="500px"></iframe>
                <h3>
                    Video
                </h3>
            </div>
        </Project>
    );
}

export default JobMaterials;