import React from 'react';
import Project from '../Project';

function InstallingGitHub() {
    return ( 
        <Project>
            <div className='igithub'>
                <h1>
                    Installing the GitHub repository
                </h1>
                <h2>
                    Choose a way to upload/download GitHub code
                </h2>

                <h3>
                    GitHub Desktop
                </h3>
                <p>
                    Offers ways to easily offer pull and push requests to GitHub.
                </p>

                <h3>
                    Git Command Line
                </h3>
                <p>
                    Uses the traditional way to pull and push Git repositories, through the command line.
                </p>
            </div>
        </Project>
     );
}

export default InstallingGitHub;