import React from 'react';
import Content from '../Content';
import Tab from '../tools/Tab';

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
            </Content>
        </div>
     );
}

export default AboutMe;