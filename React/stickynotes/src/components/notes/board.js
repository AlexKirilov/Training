import React, { Component } from 'react';
import { dependencies, devDependencies } from '../../../package.json';

import { NewNote } from 'components';
import { Notes } from 'components';

const deps = Object.assign({}, dependencies, devDependencies);

class Board extends Component {
    
    constructor() {
        super();
        this.state = { notes: [] };

        this.eachNote = this.eachNote.bind(this);
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
    }

    addNote(txt) {
        console.log("from addNote");
        var notes = this.state.notes;
        notes.push(txt);
        this.setState({notes:notes});
    }
    removeNote (index) {
        let notes = this.state.notes;
        notes.splice(index, 1);
        this.setState({notes: notes});
    }

    updateNote (newText, index) {
        let notes = this.state.notes;
        notes[index] = newText;
        this.setState({notes: notes});
    }

    eachNote (item, i) {
        return (<Notes key={i} index={i} updateNoteTxt={this.updateNote} deleteNote={this.removeNote}>{item}</Notes>);
    }

    render() {
        return (
        <div class="container">
          <NewNote newNote={this.addNote} />
          
          <div className="notes-container" id={ (this.state.notes.length > 0) ? 'addMargin' : "" }>
                {
                this.state.notes.map(this.eachNote)
                }
            </div>
        </div>
            
        );
    }
}

export default Board;