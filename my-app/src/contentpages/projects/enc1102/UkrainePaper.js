import React, { Component } from 'react';
import Project from '../Project';
import Tab from '../../../tools/Tab';
import P from '../../../tools/P';

import ukrainePaper from './src/WarInUkraine.pdf';

class UkrainePaper extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return ( 
            <Project>
                <div className='ukrainepaper'>
                    <h1>
                        WAR IN UKRAINE: Tactics Above and Below Media Ground
                    </h1>
                    <p>
                        <Tab/>Below you will see the comprehensive work over a semester of research on the study on how TikTok, Twitter, and various news sources publicised and covered the war between Ukraine and Russia. Notice the formulation of the Ukraine-Russia war as a trend for social media, aptly named trendification in the paper.
                    </p>
                    <h2>
                        Summary
                    </h2>
                    <P>
                        I had noticed in social media the disconnection between reality and the false realities found online and wanted to further investigate how and why social media creates trends about real life events. 
                        Many of those events to be hyped and mocked as if it comes from a movie or television show.
                    </P>
                    <iframe src={ukrainePaper} title="War In Ukraine" width="100%" height="500px"></iframe>
                </div>
            </Project>
         );
    }
}
 
export default UkrainePaper;