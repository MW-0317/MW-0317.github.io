import Content from '../Content';
import ListItem from './ListItem';
import latexeq from './resourcesrc/LatexEqs.pdf';
import keychords from './resourcesrc/latexkeychords.png';

function Resources() {
    return (
        <div className='resources'>
            <Content>
                <h1>
                    Personal Resources
                </h1>
                <h2>
                    Resources
                </h2>
                <hr />
                <ListItem href={latexeq} title="Latex Equations" desc="Latex Equations to Remember"/>
                <ListItem href={keychords} title="Key Chords" desc="Key Chords designed by Gilles Castel"/>
                <ListItem href="https://education.github.com/git-cheat-sheet-education.pdf" title="Git Cheat Sheet" desc="Cheat sheet for git commands"/>

                <h2>
                    Readings
                </h2>
                <hr />
                <ListItem href="https://gabrielgambetta.com/computer-graphics-from-scratch/" title="Computer Graphics From Scratch" desc="Free intro reading into programming computer graphics"/>
            </Content>
        </div>
     );
}

export default Resources;