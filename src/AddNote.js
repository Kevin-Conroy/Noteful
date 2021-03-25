import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NotefulContext from "./Context";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
      folderId: "",
    };
  }

  
 



  handleSubmit(event) {
    event.preventDefault();

    console.log(event);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleContent(event) {
    this.setState({ content: event.target.value });
  }

  handleFolder(event) {
    this.setState({ folderId: event.target.value });
  }

  render() {
    return (
      <div>
        <NotefulContext.Consumer>
          {({ addNote, folders, handleAddNote }) => (
            <form onSubmit={(e) => addNote(e, this.state.noteName)}>
              <h2>Add a Note</h2>
              <input
                value={this.state.noteName}
                type="text"
                name="name"
                id="name"
                placeholder="Your note name here"
                onChange={this.handleName.bind(this)}
              />
              <br></br>
              <input
                value={this.state.noteContent}
                type="text"
                placeholder="Note content here"
                onChange={this.handleContent.bind(this)}
              />
              <div className="drop-down">
                <select onChange={this.handleFolder.bind(this)}>
                  {folders.map((folder) => {
                    return <option value={folder.id}>{folder.name}</option>;
                  })}
                </select>
              </div>
              <button type="submit" onClick={event => handleAddNote(event, this.state)}>Add note</button>
            </form>
          )}
        </NotefulContext.Consumer>
      </div>
    );
  }
}

export default AddNote;
