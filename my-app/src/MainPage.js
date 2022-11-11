import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Projects from './contentpages/Projects';
import Resources from './contentpages/Resources';
import Information from './Information';
import Example from './contentpages/projects/Example';

class MainPage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = { currentPage: <Projects /> }

    changeState = (s) => {
        let page;
        if (s === "resources"){
            page = <Resources />
        } else {
            page = <Projects />
        }
        this.setState({currentPage: page});
    }


    render() { 
        return ( 
            <div className='bodyFlex'>
                <Router>
                    <Information onC={this.changeState} />
                    <hr className='vr'/>
                    <Routes>
                        <Route path='/'                 exact   element={this.state.currentPage}/>
                        <Route path='/project/example'          element={<Example />}/>
                    </Routes>
                </Router>
            </div>
         );
    }
}
 
export default MainPage;