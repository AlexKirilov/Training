import React, { Component } from 'react';
import { dependencies, devDependencies } from '../../../package.json';

const deps = Object.assign({}, dependencies, devDependencies);

class NewNote extends Component {
    
  constructor(props) {
    super(props);
    this.addNewNote = this.addNewNote.bind(this, 'default');
  }

  addNewNote (txt) {
    this.props.newNote(txt);
  }
  render() {
    return (
      <div className="row">
        <button onClick={this.addNewNote} className="btn-add">Add Note</button>
      </div>
    );
  }
}

export default NewNote;