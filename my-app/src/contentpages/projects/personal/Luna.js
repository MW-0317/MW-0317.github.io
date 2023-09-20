import React, { Component } from 'react';
import Project from '..//Project';
import P from '../../../tools/P';

class Luna extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return ( 
            <Project>
                <div className='luna'>
                    <h1>
                        Luna Game/Rendering Engine
                    </h1>
                    <P>
                        I began my OpenGl with a project aptly named learn-opengl which can be found <a href="https://github.com/MW-0317/learn-opengl">here</a>.
                        Not much was done inside that project because I was so much more wanting to do something more and that was to create a game engine.
                        I had not just jumped right in however, I had planned out what I wanted my engine to be: one that could render out full scenes, and
                        all could be programmed with a scripting language like Lua (partially where Luna comes from).
                    </P>
                    <P>
                        At the moment, there isn't much, not even a particle system works fully. However, I plan to work on it for as long as possible.
                    </P>
                    <a href="https://github.com/MW-0317/luna">Luna Engine GitHub</a>
                </div>
            </Project>
         );
    }
}
 
export default Luna;