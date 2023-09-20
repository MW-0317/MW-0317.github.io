import React from 'react';

import research from './src/ResearchProposal.pdf';
import researchrevised from './src/ResearchProposalRevised.pdf';

import Project from '../Project';
import P from '../../../tools/P';
import FigureText from '../../../tools/FigureText';
import ListItem from '../../ListItem';

function ResearchProposal() {
    return (
        <Project>
            <div className='research'>
                <h1>Research Proposal</h1>
                <h2>Unrevised</h2>
                <P>
                    For the final project in ENC3241, before creating a website/portfolio we were, in a group of 2-4, designated to create a research proposal as if we were proposing a resarch topic for Undergraduate Research at the University of Central Florida. With the help of two others, we created the document below. Each group member was designated finding three sources which were relevant to what we wanted to research, and finally I was designated to "Project Background and Significance" which relied on interpreting the other two members descriptions of each of their sources and creating a comprehensive paragraph. I was also designated to the "Literature Review" and parts of the "Preliminary Work and Experience" where necessary. I then, to make sure to watch over each other, editted and fixed whatever I could wherever else my teammates were working on. This was all easily done through Google Docs.
                </P>
                <iframe src={research} title="research" width="100%" />
                <FigureText>
                    <b>Figure 1</b>
                    <ListItem isFile href={research} title="Unrevised Research Proposal Link" desc={<FigureText>Unrevised research proposal.</FigureText>} />
                </FigureText>
                <h2>Revised</h2>
                <P>
                    For this revision, most was done well besides some minor error in citation in-text and in the "Literature Review." Both of these errors were my doing and are fixed below. Those fixes including the alphabetical ordering of the in-text citations and the italization of the publishers under "Literature Review."
                </P>
                <iframe src={researchrevised} title="research" width="100%" />
                <FigureText>
                    <b>Figure 2</b>
                    <ListItem isFile href={research} title="Revised Research Proposal Link" desc={<FigureText>Up to date and revised research proposal.</FigureText>} />
                </FigureText>
            </div>
        </Project>
    );
}

export default ResearchProposal;