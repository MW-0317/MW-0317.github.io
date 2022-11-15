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
                <ListItem isFile href={latexeq} title="Latex Equations" desc="Latex Equations to Remember"/>
                <ListItem isFile href={keychords} title="Key Chords" desc="Key Chords designed by Gilles Castel"/>
                <ListItem isFile href="https://education.github.com/git-cheat-sheet-education.pdf" title="Git Cheat Sheet" desc="Cheat sheet for git commands"/>
                <ListItem isFile href="https://detexify.kirelabs.org/classify.html" title="LaTex 'Detexify'" desc="Easy way to find mathematical symbols for LaTex"/>
                <ListItem isFile href="https://loremipsum.io/generator/" title="Lorem Ipsum Generator" desc="Easy to generate text"/>

                <h2>
                    Readings
                </h2>
                <hr />
                <ListItem isFile href="https://gabrielgambetta.com/computer-graphics-from-scratch/" title="Computer Graphics From Scratch" desc="Free intro reading into programming computer graphics"/>

                <h2>
                    Sources / Inspiration
                </h2>
                <hr />
                <ListItem isFile href="https://castel.dev" title="Website/Future Inspiration - Gilles Castel" desc="A programmer and mathematician by the name Gilles Castel." />
                <ListItem isFile href="http://www.cs.ucf.edu/~dmarino/ucf/index.html" title="Website Inspiration - Arup Guha" desc="Professor at the University of Central Florida, who I enjoy their website's simplicity."/>
                <ListItem isFile href="https://www.google.com" title="Google" desc="Programming is mostly a skill based on Googling. "/>
            </Content>
        </div>
     );
}

export default Resources;