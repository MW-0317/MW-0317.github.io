import React from 'react';
import Content from '../Content';
import Tab from '../tools/Tab';
import P from '../tools/P';

function AboutMe() {
    return ( 
        
        <div className='aboutMe'>
            <Content>
                <h1>
                    Who even am I?
                </h1>
                <p>
                    <Tab />My name is Mark Williams and
                    I'm a Computer Science Undergrad at the University of Central Florida with the aspirations of becomming a graphics programmer.
                    I've taken notable courses such as Computer Science I and have already passed UCF's foundational exam. 
                    I spend most of my time studying for classes or programming my next project. 
                    These projects being used to learn Python, Javascript (Including Nodejs), and C.
                    Whilst learning C in my Intro to Programming and Computer Science I classes, I also took the time to learn Linux alongside it.
                    If you'd like to see my most beloved and developed projects see my "Projects" page<sup>1</sup>.

                    <hr/>

                    [1] This site itself was one of my projects. Made entirely within React, it functions without a backend component and is entirely frontend.
                </p>

                <h2>For my professor</h2>
                <P>
                    I really love how far this website has gone. I have spent as much time as I could since Project 2 and it's finally coming along. Recently I really have gotten obsessed with old mathematical diagrams from older mathematical journals (Journals from 1970s-1980s). I'm not sure if its the print texture I love or the idea of simple geometric diagrams, but I have modeled my website after such. This is why I had implemented a spinning cube in the top left, because it attempts to create a 3D version of those mathematical diagrams that I love. With that, the font I have chosen is the same font as a mathematical journal I found in the library while attempting to find how digrams from the 70s and 80s were created.
                </P>
                <P>
                    By using a html, css, and javascript platform I have learned so much on programming websites--which will hopefully assist me in finding a job. I have spent since Project 2 (Resume and Cover Letter) working on this website and hope that it comes out clean and professional.
                </P>
                <hr />
                <p>This website does <b>not</b> use any template besides inspiration from websites in the "Extra" tab, marked as <i>Website Inspiration</i>.</p>
            </Content>
        </div>
     );
}

export default AboutMe;