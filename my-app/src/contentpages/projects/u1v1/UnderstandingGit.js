import React, { Component } from 'react';
import Project from '../Project';
import g from './src/gitcontrolmain.png';
import gb from './src/gitcontrolbranches.png';
import gm from './src/gitcontrolmerges.png';
import gmc from './src/gitcontrolmergeconflicts.png';

class UnderstandingGit extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // state = {  }
    render() { 
        return ( 
            <Project>
                <div className='ugit'>
                    <h1>
                        Understanding Git
                    </h1>
                    <h2>
                        Definitions
                    </h2>
                    Branch - Separations of code to allow for collaboration, thus it’s important to pull from the repository before you push and to make sure you’re not working on the same code as someone else.
                    <span className='br'/>
                    Push - To send and update to GitHub, in other words send information for GitHub to download.
                    <span className='br'/>
                    Pull - To download/update files from GitHub.
                    <span className='br'/>
                    Merge - To merge two separate code branches.
                    <span className='br'/>
                    <i>Note that it’s only important to understand Push and Pull.</i>

                    <h2>
                        Version Control
                    </h2>

                    <p>
                    Git is a way in which programmers use <strong><i>version control</i></strong> on their software. 
                    This enables it to have version back ups just in case something terrible is to happen. 
                    Version control is the concept that underlies Git, and Git is a command line software that allows us to use this concept. 
                    GitHub is a place that hosts your Git files (<i>for free</i>). 
                    </p>
                    <img src={g} alt="Git"/>

                    <h2>
                        Branches
                    </h2>

                    <p>
                        Git also allows us to branch off certain versions as to program away from a version more delicate. 
                        For example, you’d most likely not want to program under the same code as the main server of a video game, 
                            instead you’d want to <i>branch</i> away to a beta sever to test a bug fix or new feature.
                    </p>

                    <img src={gb} alt="Git Branches"/>

                    <h2>
                        Merge
                    </h2>

                    <p>
                    Once a branch has been programmed and is ready to be moved to the live server, it can be <i>merged</i> with the live code. 
                    </p>

                    <img src={gm} alt="Git Merges"/>

                    <h3>
                        Merge Conflicts
                    </h3>

                    <p>
                        Sometime this creates conflicts however as long as the beta or side branch stays away from code that’s also being modified somewhere else it should be fine.
                    </p>

                    <img src={gmc} alt="Git Merge Conflicts"/>
                </div>
            </Project>
         );
    }
}
 
export default UnderstandingGit;