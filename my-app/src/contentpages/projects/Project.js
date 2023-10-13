import React, { Component, /*useEffect*/ } from 'react';
import './Project.css';
import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

import backbtn from './src/backbtno2.svg';

class Project extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return (
            <>
            <div className='project'>
                <div style={
                    {
                        position: 'relative'
                    }
                }>
                    <Link to="/">
                    <button className='backbtn'>
                        <img className='backarrow' src={backbtn} alt="backarrow" />
                        <p className='bbtxt'>
                            Back
                        </p>
                    </button>
                    </Link>
                </div>
                
                {this.props.children}
            </div>
            </>
         );
    }
}
 
export default Project;