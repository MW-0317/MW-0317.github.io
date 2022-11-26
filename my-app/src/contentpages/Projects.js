import React from 'react';
import Content from '../Content';
import ListItem from './ListItem';

function Projects() {
    return ( 
        <div className='projects'>
            <Content>
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
                <ListItem href="/project/enc3241/instructions"  title="Minecraft Instructions"  desc="Instructions for building a basic Minecraft Redstone Build" />
                <ListItem href="/project/enc3241/jobmat"        title="Job Materials"           desc="Materials for Applying for a Job" />
            </Content>
        </div>
     );
}

export default Projects;