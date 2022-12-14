import React from 'react';
import Content from '../Content';
import ListItem from './ListItem';

function Projects() {
    return ( 
        <Content>
            <div className='projects'>
                <h1>
                    Projects @ Home
                </h1>
                <ListItem href="/project/example"   title="Example Page" desc="Example Page for a project"/>
                <ListItem href="/project/u1v1"      title="Untitled1v1 Game Resources" desc="For those involved in creation of the game"/>
                <h1>
                    Projects @ UCF
                </h1>
                <h2>
                    ENC 3241
                </h2>
                <ListItem href="/project/enc3241/instructions"  title="Minecraft Instructions"  desc="The instructions for building a basic Minecraft Redstone Build, specifically the 'Jeb' door. See instructions for defintion." />
                <ListItem href="/project/enc3241/jobmat"        title="Job Materials"           desc="My current job materials for applying to a job, including my resume, cover letter, and video interview." />
                <ListItem href="/project/enc3241/research"      title="Research Proposal"       desc="A mock research proposal for an Undergraduate Research opportunity. This proposal specialized in the concept of COVID-19 in the classroom and it's effect on stress in close proximity to one another." />
            </div>
        </Content>
     );
}

export default Projects;