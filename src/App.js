import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import FolderDetail from "./FolderDetail";
import AddFolder from "./AddFolder";
import AddNote from "./AddNote";
import initialState from "./Folders";
import NoteContent from "./NoteContent";
import NotefulContext from "./Context";
import NotefulError from "./ErrorBoundary";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { folders: [], notes: [], loading: true };
  }
  componentDidMount() {
    this.setState({ loading: true });
    Promise.all([
      fetch("http://localhost:9090/folders").then((response) =>
        response.json()
      ),

      fetch("http://localhost:9090/notes").then((response) => response.json()),
    ]).then(([folders, notes]) => {
      this.setState({ folders, notes, loading: false });
    });
  }

  addFolder(event, name) {
    event.preventDefault();

    return fetch(`http://localhost:9090/folders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const newState = [...this.state.folders];
        newState.push(responseJson);
        this.setState({ folders: newState });
        console.log(responseJson);
      });
  }

  handleAddNote(event, newNote) {
    event.preventDefault();

    return fetch(`http://localhost:9090/notes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const newNoteState = [...this.state.notes];
        newNoteState.push(responseJson);
        console.log(newNoteState);
        this.setState({ notes: newNoteState });
        console.log(responseJson);
      })
      .catch((error) => {
        console.log("Loading error");
      });
  }

  handleDelete(event, id) {
    event.preventDefault();
    event.stopPropagation();
    return fetch(`http://localhost:9090/note/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() =>
        this.setState({
          notes: this.state.notes.filter((note) => note.id != id),
        })
      );
  }

  render() {
    return (
      <NotefulContext.Provider
        value={{
          addFolder: this.addFolder.bind(this),
          handleDelete: this.handleDelete.bind(this),
          handleAddNote: this.handleAddNote.bind(this),
          folders: this.state.folders,
          notes: this.state.notes,
          loading: this.state.loading,
        }}
      >
        <div>
          <Header />
          <NotefulError>
            <Sidebar folders={this.state.folders} />
          </NotefulError>

          <Link to="/AddFolder">Click to add a folder</Link>

          <Route path="/folder/:folderId" component={FolderDetail} />

          <Route path="/addfolder" component={AddFolder} />

          <Route path="/addnote" component={AddNote} />

          <Route path="/notecontent/:noteId" component={NoteContent} />
        </div>
      </NotefulContext.Provider>
    );
  }
}
