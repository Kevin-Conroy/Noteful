import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NotefulContext from "./Context";
import NotefulError from "./ErrorBoundary";

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
          {({ addNote, folders, handleAddNote }) => {
            if (!this.state.folderId) {
              this.setState({ folderId: folders[0].id });
            }

            return (
              <form onSubmit={(e) => handleAddNote(e, this.state)}>
                <h2>Add a Note</h2>
                <input required
                  value={this.state.noteName}
                  type="text" 
                  name="name"
                  id="name"
                  placeholder="Your note name here"
                  onChange={this.handleName.bind(this)}
                />
                <br></br>
                <input required
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
                <button type="submit">Add note</button>
              </form>
            );
          }}
        </NotefulContext.Consumer>
      </div>
    );
  }
}

export default AddNote;
