import React from 'react';
import instructions from './src/MinecraftInstructionsFinal.pdf';

import Project from '../Project';
import ListItem from '../../ListItem';
import Callout from '../../../tools/Callout';

function Instructions() {
    return ( 
        <Project>
            <div className='instructions'>
                <h1>
                    Minecraft Redstone Instructions
                </h1>
                Below is instructions for building a "Jeb" door within Minecraft. I wrote it inside ENC 3241 and it challenged me to design instructions that interested me. For this I chose Minecraft as it was a childhood video game that I would play for hours. This was one of the first redstone designs I learned and I wanted to move forward the knowledge.
                <iframe src={instructions} title="Instructions" width="100%" height="500px"></iframe>
                <div className='fig-text'><ListItem isFile href={instructions} title="Instructions Link" desc="" /></div>
                <Callout>NOTE: The PDF above is an unrevised version of my instructions.</Callout>
            </div>
        </Project>
    );
}

export default Instructions;