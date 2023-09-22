import React, { Component } from 'react';
import "./FlexList.css";

class FlexList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return (
            <>
            <div className='flexList'>
                {this.props.children}
            </div>
            </>
         );
    }
}
 
export default FlexList;