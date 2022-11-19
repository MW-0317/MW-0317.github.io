import React, { Component } from 'react';
import Project from './Project';
import Callout from '../../tools/Callout';
import ListItem from '../ListItem';

class Untitled1v1 extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // state = {  }
    render() { 
        return ( 
            <Project>
                <div className='u1v1'>
                    <h1>
                        Untitled1v1
                    </h1>
                    <Callout>
                    If you have any questions, don’t be hesitant to contact me on Discord. Also if you think I should add a tutorial or update an already made one, don’t hesitate to ask me.
                    </Callout>
                    <h2>
                        Where to start
                    </h2>
                    <ListItem href="/project/u1v1/understanding-git" title="Understanding Git" />
                    <ListItem href="/project/u1v1/installing-github" title="Installing GitHub" />
                </div>
            </Project>
         );
    }
}
 
export default Untitled1v1;