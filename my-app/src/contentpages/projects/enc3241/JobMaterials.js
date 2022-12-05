import React from 'react';

import rc from './src/ResumeAndCover.pdf';
import rcr from './src/ResumeAndCoverRevised.pdf';

import Project from '../Project';
import P from '../../../tools/P';
import FigureText from '../../../tools/FigureText';
import ListItem from '../../ListItem';

function JobMaterials() {
    return ( 
        <Project>
            <div className='jobmat'>
                <h1>
                    Job Materials
                </h1>
                <hr />
                <h2>
                    Unrevised Job Materials
                </h2>
                <P>
                    In the class ENC3241 I was tasked with findind a job that interested me and creating a resume, cover letter, and quick video interview. Below are the unrevised job materials, including my resume and cover letter. This was to a position in Plantation, FL as it was close to home, since I would be moving back home for the summer semester. I however did not ever submit this resume and cover letter as I did not meet my own standards, however I do regret not applying. I plan to apply more heavily for summer jobs over the coming winter break (Dec 2022).
                </P>
                <h3>Resume and Cover Letter</h3>
                <iframe src={rc} title="Resume and Cover Letter" width="100%"></iframe>
                <FigureText>
                    <b>Figure 1</b>
                    <ListItem isFile href={rc} title="Resume and Cover Letter Link" desc={<FigureText>*Not up to date and unrevised.</FigureText>} />
                </FigureText>
                <h3>
                    Video
                </h3>
                <P>
                    I will have to apologize for the speed as I do talk a little fast, however it should be noted that I needed to fit this inside a 75 second window as a requirement in the ENC3241 project. I easily surpass this, mistakenly. In future video interviews I need to condense what I say into shorter amounts of information that can fit inside this 75 second window.
                </P>
                <iframe src="https://www.youtube.com/embed/2q2tohLFkJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <FigureText>
                    <b>Figure 2</b>
                    <ListItem isFile href="https://youtu.be/2q2tohLFkJII" title="Vide Interview Link" />
                </FigureText>
                <h2>
                    Revised Job Materials
                </h2>
                <P>
                    First a summary of what my professor recommended I change.
                </P>
                <ul>
                    <li>1. To change the [Outgoing Address] → Actual address (I will not be doing here as this is a public website).</li>
                    <li>2. Increase the font size of my cover letter → 12pt font as it was very small in comparison with what is expected.</li>
                    <li>3. Fix the wording inside my cover letter</li>
                    <li>4. To not bullet point as much because that level two headings don't require bullet points.</li>
                </ul>
                <P>What I changed</P>
                <ul>
                    <li>1. I increased the font size of the cover letter to 12pt font as requested.</li>
                    <li>2. Fixed some wording on my cover letter in the third paragraph.</li>
                    <li>3. Removed bullet points on my resume as they didn't seem necessary.</li>
                    <li>4. Added this website in my resume.</li>
                </ul>
                <P>See below for revised</P>
                <iframe src={rcr} title="Resume and Cover Letter revised" width="100%"></iframe>
                <FigureText>
                    <b>Figure 3</b>
                    <ListItem isFile href={rcr} title="Resume and Cover Letter Revised Link" desc={<FigureText>Up to date and revised job materials.</FigureText>} />
                </FigureText>
            </div>
        </Project>
    );
}

export default JobMaterials;