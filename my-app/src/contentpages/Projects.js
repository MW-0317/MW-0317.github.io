import React from 'react';
import Content from '../Content';
import ListItem from './ListItem';

function Projects() {
    return ( 
        <div className='projects'>
            <Content>
                <h1>
                    Projects
                </h1>
                <ListItem href="/project/example"   title="Example Page" desc="Example Page for a project"/>
                <ListItem href="/project/u1v1"      title="Untitled1v1 Game Resources" desc="For those involved in creation of the game"/>
            </Content>
        </div>
     );
}

export default Projects;