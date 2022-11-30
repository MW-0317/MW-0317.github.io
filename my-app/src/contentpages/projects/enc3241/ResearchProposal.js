import React from 'react';
import research from './src/ResearchProposal.pdf';
import Project from '../Project';

function ResearchProposal() {
    return (
        <Project>
            <div className='research'>
                <h1>Research Proposal</h1>
                <iframe src={research} title="research" width="100%" height="500px"/>
            </div>
        </Project>
    );
}

export default ResearchProposal;