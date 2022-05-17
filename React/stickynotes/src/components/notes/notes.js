import React, { Component } from 'react';
import { dependencies, devDependencies } from '../../../package.json';

const deps = Object.assign({}, dependencies, devDependencies);

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = { editing : false };
        
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
    }

    edit () {
        this.setState(prevState => ({editing: true}));
    }

    save () {
        this.setState(prevState => ({editing: false}));
        this.props.updateNoteTxt(this.refs.newText.value, this.props.index);
    }

    remove () {
        this.props.deleteNote(this.props.index);
    }

    renderForm () {
        return (
            <div className="noteContainer">
                <div className="noteTxt">{this.props.children}</div>
                <div className="bottom">
                    <button onClick={this.edit} className="btn-primary">Edit</button>
                    <button onClick={this.remove} className="btn-danger">Remove</button>
                </div>
            </div>
        );
    }

    renderEditingForm () {
        return (
            <div className="noteContainer">
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <div className="bottom">
                    <button onClick={this.save} className="btn-success">Save</button>
                </div>
            </div>
        );
    }

    render() {
        if(this.state.editing) {
            return this.renderEditingForm();
        } else {
            return this.renderForm();
        }
    }
}

export default Notes;