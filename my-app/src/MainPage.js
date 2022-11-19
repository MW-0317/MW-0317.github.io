import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'; //BrowserRouter as Router

import Projects from './contentpages/Projects';
import Resources from './contentpages/Resources';
import Information from './Information';
import Example from './contentpages/projects/Example';
import Untitled1v1 from './contentpages/projects/Untitled1v1';
import UnderstandingGit from './contentpages/projects/u1v1/UnderstandingGit';
import InstallingGitHub from './contentpages/projects/u1v1/InstallingGitHub';
// import Content from './Content';

import './MainPage.css';
import AboutMe from './contentpages/AboutMe';
import Notes from './contentpages/Notes';

class MainPage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = { currentPage: <Projects /> }

    changeState = (s) => {
        let page;
        if (s === "resources"){
            page = <Resources />
        } else if (s === "projects") {
            page = <Projects />
        } else if (s === "aboutme") {
            page = <AboutMe />
        } else {
            page = <Notes />
        }
        this.setState({currentPage: page});
    }


    render() { 
        return ( 
            <div className='bodyFlex'>
                <Router>
                    <Information onC={this.changeState} />
                    {/* <hr className='vr'/> */}
                    <Routes>
                        <Route path='/'                         exact   element={this.state.currentPage}/>
                        <Route path='/project/example'                  element={<Example />}/>
                        <Route path='/project/u1v1'                     element={<Untitled1v1 />}/>
                        <Route path='/project/u1v1/understanding-git'   element={<UnderstandingGit />} />
                        <Route path='/project/u1v1/installing-github'   element={<InstallingGitHub />}/>
                    </Routes>
                </Router>
            </div>
         );
    }
}
 
export default MainPage;