import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'; //BrowserRouter as Router

import Projects from './contentpages/Projects';
import Resources from './contentpages/Resources';
import Information from './Information';
import Example from './contentpages/projects/Example';
import Luna from './contentpages/projects/personal/Luna';
import Untitled1v1 from './contentpages/projects/Untitled1v1';
import UnderstandingGit from './contentpages/projects/u1v1/UnderstandingGit';
import InstallingGitHub from './contentpages/projects/u1v1/InstallingGitHub';
import UkrainePaper from './contentpages/projects/enc1102/UkrainePaper';
import Instructions from './contentpages/projects/enc3241/Instructions';
// import Content from './Content';

import './MainPage.css';
import AboutMe from './contentpages/AboutMe';
import Notes from './contentpages/Notes';
import JobMaterials from './contentpages/projects/enc3241/JobMaterials';
import ResearchProposal from './contentpages/projects/enc3241/ResearchProposal';
import Home from './Home';
import EmptyPage from './EmptyPage';

class MainPage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    changeState = (s) => {
        this.setState({currentPage: this.dict[s], stringCurrPage: s});
    }

    state = { currentPage: <Projects />, stringCurrPage: "projects"}

    dict = {"resources": <Resources />, "projects": <Projects />, "aboutme": <AboutMe />, "notes": <Notes />};


    render() { 
        return ( 
            <div className='bodyFlex'>
                <Router>
                    <Routes>
                        <Route path='/home'     element={<Home onC={this.changeState} />} />
                        <Route path='/*'         element={<Information onC={this.changeState} />} />
                        {/* <Route path='/*'                                element={window.location.pathname === "/home" ? <Home onC={this.changeState} /> : <Information onC={this.changeState} />}/> */}
                    </Routes>
                    {/* {this.state.stringCurrPage === "home" ? <></> : <Information onC={this.changeState} /> } */}
                    {/* <hr className='vr'/> */}
                    <Routes>
                        <Route path='/*'                                element={<EmptyPage />} />
                        <Route path='/home'                             element={<></>} />
                        <Route path='/'                                 element={this.state.currentPage}/>
                        <Route path='/project/example'                  element={<Example />}/>
                        <Route path="/project/luna"                     element={<Luna />}/>
                        <Route path='/project/u1v1'                     element={<Untitled1v1 />}/>
                        <Route path='/project/u1v1/understanding-git'   element={<UnderstandingGit />} />
                        <Route path='/project/u1v1/installing-github'   element={<InstallingGitHub />}/>
                        <Route path='/project/enc1102/ukraine-paper'    element={<UkrainePaper />}/>
                        <Route path='/project/enc3241/instructions'     element={<Instructions />} />
                        <Route path='/project/enc3241/jobmat'           element={<JobMaterials />} />
                        <Route path='/project/enc3241/research'         element={<ResearchProposal />} />
                    </Routes>
                </Router>
            </div>
         );
    }
}
 
export default MainPage;