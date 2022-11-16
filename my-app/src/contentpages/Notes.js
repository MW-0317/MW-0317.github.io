import React from 'react';
import Content from '../Content';
import ListItem from './ListItem';
import './Notes.css';

function Notes() {
    return ( 
    <div className='notes'>
        <Content>
            <h1>
                Notes
            </h1>
            <ListItem isFile href="https://github.com/MW-0317/LaTeX-Lecture-Notes/blob/main/MAC-2313/mac.pdf" title="MAC 2313" desc="MAC 2313 Lecture Notes Fall '22" />
        </Content>
    </div> 
    );
}

export default Notes;