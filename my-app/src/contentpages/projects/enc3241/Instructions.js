import React from 'react';

import instructions from './src/MinecraftInstructionsFinal.pdf';
import appt1 from './src/appt1.png';
import appt2 from './src/appt2.png';
import lego1 from './src/lego1.png';

import Project from '../Project';
import ListItem from '../../ListItem';
import P from '../../../tools/P';
import TwoColumn from '../../../tools/TwoColumn';
import Sup from '../../../tools/Sup';

function Instructions() {
    return ( 
        <Project>
            <div className='instructions'>
                <h1>
                    Minecraft Redstone Instructions
                </h1>
                <h2>
                    Background
                </h2>
                <P>
                    In the UCF class <i>ENC3241</i> I was tasked with creating instructions that was important to us. For this I wanted to do a video game that I had been playing since I was in elementary school: <i>Minecraft</i>. It was the game that taught me about the wonders of programming through command blocks and I wanted to attempt to share that love through the basics of redstone. The first redstone machine that I learned was titled the "Jeb" door. It's a semi-simple hidden door that would open with an easy flick of a lever (Best for hiding my gold and diamonds from my friends).
                </P>
                <h2>
                    The Process
                </h2>
                <P>
                    Through this project I wanted to learn something new--something I had barely looked into and something that interested me: <i>Blender</i>. Blender is an amazing 3D modeling tool that would fit perfectly for the blocky, 3D game that is <i>Minecraft</i>. Then I would export the desired 3D models and transpose them into <i>Inkscape</i>--an SVG modification software. This allowed for easy and high quality PDF's for my project, to be compressed when finally uploaded.
                </P>
                <h2>
                    Initial Brainstorm
                </h2>
                <div className='fig-text'>
                    <i>Below is the initial brainstorm of my instructions before I began creation.</i>
                </div>
                <h3>
                    An Overview
                </h3>
                <P>
                    This may sound strange to some, but I still play the video game Minecraft. It’s such a calming experience. I find that the game’s primary audience is between children and early teenagers and it’s secondary audience is teenagers to adults. I, obviously, fit into the latter half as a secondary audience. Because of this, many of my ideas aren’t taken into consideration as heavily as for those of younger audiences or adults of those younger audiences. This follows for much of the media online that creates content for Minecraft. Much of it is created for a younger audience because the game itself is made for one.
                </P>
                <P>
                    Redstone, an ore in the game that allows for a form of electricity, and the more complex systems of the game I find more interesting than the sandbox aspect that attracts younger audiences. A lot of times I forget the most basic redstone contraptions of the game and need some refreshers to catch me up, however when I want to find these contraptions online there’s only videos, screenshots, or long blog articles filled with ads on how to create some of these. What I want to do is make it less difficult to create these contraptions by making an instruction manual on some of the basic ones. By doing so I not only fit an audience of teenagers and adults that want refreshers but also those of preteens and children that are just getting into redstone.
                </P>
                <P>
                    To fit these two audiences I want to provide both the instructions and the final product from multiple angles. The multiple angles covering the front page for easy copy.
                </P>
                <h3>
                    Instructions Templates
                </h3>
                <TwoColumn 
                c1={
                    <>
                        <h4>
                            Portal (Aperture Labs)
                        </h4>
                        <P>
                            I’d like to take inspiration from the instructions and warnings from the video game Portal (specifically from the company Aperture Labs in game). Although these are made for older audiences, like teenagers and adults, I like the design of the 3d aspect and the usage of characters to display movement. In this sense I would use Minecraft characters to display some button press or activation in the redstone contraptions.
                        </P>
                        <img src={appt1} alt="" />
                        <img src={appt2} alt="" />
                        <b>Pros:</b>
                        <ul>
                            <li>
                                <p>3D, represents indoor rooms by cutting the room to make it easily visible to the camera.</p>
                            </li>
                            <li>
                                <p>Shows giant yellow arrows to represent movement</p>
                            </li>
                            <li>
                                <p>Shows a cartoon character to help represent movement, which I’d like to use, however instead with Minecraft characters.</p>
                            </li>
                        </ul>
                        <b>Cons:</b>
                        <ul>
                            <li>
                                <p>Unless you play the game, you do not know what the blue tunnel does and would be better understood with multiple images to represent movement instead of yellow arrows. That being, for me, both the young audiences and their parents will need to understand the instructions and I need to be able to accompany both.</p>
                            </li>
                        </ul>
                    </>
                    
                }
                c2 = {
                    <>
                        <h4>
                            Lego
                        </h4>
                        <P>
                            Then I’d like to take inspiration from the instructions of Lego, where it shows 3d objects, how and where to place them. With side panels expressing if multiple blocks need to be placed together being assembling to other pieces.
                        </P>
                        <img src={lego1} alt="" />
                        <b>Pros:</b>
                        <ul>
                            <li>
                                <p>3D, which is what I will need to do as well with Minecraft blocks.</p>
                            </li>
                            <li>
                                <p>Easy to follow</p>
                            </li>
                            <li>
                                <p>Represents all blocks using text and images</p>
                            </li>
                            <li>
                                <p>Sections pieces off to be build otherwhere and later placed onto the build.</p>
                            </li>
                        </ul>
                        <b>Cons:</b>
                        <ul>
                            <li>
                                <p>The colors are reminiscent of colors in young children media, even by name, as the color resembles baby blue.</p>
                            </li>
                            <li>
                                <p>Arrows may be too small</p>
                            </li>
                            <li>
                                <p>Will not provide multiple images to represent movement in the contraptions.</p>
                            </li>
                        </ul>
                    </>
                }
                />
                <table>
                    <tr>
                        <th></th>
                        <th>Audience</th>
                    </tr>
                    <tr>
                        <td><p><b>Age Range</b></p></td>
                        <td>
                            <P>
                                <b>Late preteens/early teens/early adults</b>. Since the audience ranges so widely, it might be good to keep wording limited besides troubleshooting/materials/warnings. All using imagery to compliment the words. Each sentence would use simple and appropriate vocabulary to fit the younger audience, which would still be readable to older audiences. The early vocabulary could however be annoying to the older audiences and should still be non-repeating and concise.
                            </P>
                            <P>
                                I will also need to account for both the young audience and the parents themselves (the gatekeepers). I will need it to be appropriate and for parents to understand how the items in game function.
                            </P>
                        </td>
                    </tr>
                    <tr>
                        <td><p><b>Game Niche</b></p></td>
                        <td><P><b>Basic Redstone<Sup refId="sup1">1</Sup>.</b></P></td>
                    </tr>
                    <tr>
                        <td><p><b>Education</b></p></td>
                        <td><P>
                            <b>Nothing/Some Basic Redstone</b>. Since I’m offering both options, it would be best to use a few, different angle, images at the beginning for those who just need a refresher, and a full instructions with red arrows to show placing of blocks. With that, using words and images to represent if the object in the instructions has moved.
                        </P></td>
                    </tr>
                    <tr>
                        <td><p><b>Environment</b></p></td>
                        <td>
                            <P>
                                <b>Pages and Webpages</b>. I plan to use my environment as both physical lego-like books and webpages once we return with our portfolio<Sup refId="sup2">2</Sup>.
                            </P>
                        </td>
                    </tr>
                    <tr>
                        <td><p><b>Sectioning</b></p></td>
                        <td>
                            <P>
                                <b>Sectioned Builds</b>. I plan to section my builds on block usage. This would follow: building the frame of the contraption, placing the important redstone blocks, and lastly placing the wiring, the redstone itself, last. This makes it easiest to follow, as this is how a real player would section and place these blocks, with that this pattern makes it easier to follow and remember since it follows an instinctual way of categorizing contraption creation.
                            </P>
                        </td>
                    </tr>
                    <tr>
                        <td><p><b>Block Usage</b></p></td>
                        <td>
                            <P>
                                <b>Colorful Blocks</b>. I plan<Sup refId="sup3">3</Sup> to use blocks like wool and concrete in game because of the color variety and color saturations they provide. Sectioning different “wires” based on wool would make the connections easy to follow.
                            </P>
                        </td>
                    </tr>
                </table>
                <h2>
                    Creation
                </h2>
                <P>
                    After heavy development I finally created what is shown below. There's not much else between the idealization and creation as I did not heavily document the process.
                </P>
                <iframe src={instructions} title="Instructions" width="100%" height="500px"></iframe>
                <div className='fig-text'><ListItem isFile href={instructions} title="Instructions Link" desc={<div className='fig-text'>
                    *Not up to date and unrevised.
                </div>} /></div>
                <hr />
                <p id="sup1">[1] Basic in terms of basic machines, should be titled "Basic Redstone Machines."</p>
                <p id="sup2">[2] I am no longer doing this.</p>
                <p id="sup3">[3] I instead opted to use blocks like stone and dirt to follow a more natural look so that players could easily adapt it into their world.</p>
            </div>
        </Project>
    );
}

export default Instructions;