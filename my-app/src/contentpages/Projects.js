import React from 'react';
import Content from '../Content';
import ListItem from './ListItem';
import FlexList from './FlexList';
import CardItem from './CardItem';

import luna from "./resourcesrc/drawing.png";

function Projects() {
    return ( 
        <Content>
            <div className='projects'>
                <h1>
                    Projects @ Home
                </h1>
                {/* <ListItem href="/project/example"   title="Example Page" desc="Example Page for a project"/> */}
                {/* <ListItem href="/project/u1v1"      title="Untitled1v1 Game Resources" desc="For those involved in creation of the game"/> */}
                <FlexList>
                    <CardItem href="/project/luna"                  title="Luna Engine"             
                    desc="A game or rendering engine named luna."
                    imgSrc={luna}/>
                </FlexList>
                
                <h1>
                    Projects @ UCF
                </h1>
                <h2>
                    ENC 1102
                </h2>
                <ListItem href="/project/enc1102/ukraine-paper" title="War in Ukraine"          desc="A paper researching the formulation of trends during the beginning of recent Ukraine-Russia War."/>
                <h2>
                    ENC 3241
                </h2>
                <FlexList>
                    <CardItem href="/project/enc3241/instructions"  title="Minecraft Instructions"  
                        desc="The instructions for building a basic Minecraft Redstone Build, specifically the 'Jeb' door. See instructions for defintion." 
                        imgSrc=""/>
                    <CardItem href="/project/enc3241/jobmat"        title="Job Materials"           desc="My current job materials for applying to a job, including my resume, cover letter, and video interview." />
                    <CardItem href="/project/enc3241/research"      title="Research Proposal"       desc="A mock research proposal for an Undergraduate Research opportunity. This proposal specialized in the concept of COVID-19 in the classroom and it's effect on stress in close proximity to one another." />
                </FlexList>
                
            </div>
        </Content>
     );
}

export default Projects;