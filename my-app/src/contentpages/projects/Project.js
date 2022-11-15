import React, { Component } from 'react';
import './Project.css'

class Project extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return ( 
            <div className='project'>
                {this.props.children}
            </div>
         );
    }
}
 
export default Project;