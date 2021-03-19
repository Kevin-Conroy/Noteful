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
    ])
      .then(([folders, notes]) => {
        this.setState({ folders, notes });
      })
      .catch(console.log)
      .then(() => 
      setTimeout(() => this.setState({ loading: false }), 3000)
    )
  }

  handleDelete(event, id) {
    event.preventDefault()
    event.stopPropagation()
    fetch(`http://localhost:9090/note/${id}`, {
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
        value={{ handleDelete: this.handleDelete.bind(this), folders: this.state.folders, notes: this.state.notes, loading: this.state.loading}}
      >
        <div>
          <header>
            <Header />
          </header>

          <sidebar>
            <Sidebar />
          </sidebar>

          <addFolder>
            <Link to="/AddFolder">Click to add a folder</Link>
          </addFolder>

          <Route path="/folder/:folderId" component={FolderDetail} />

          <Route path="/addfolder" component={AddFolder} />

          <Route path="/addnote" component={AddNote} />

          <Route path="/notecontent/:noteId" component={NoteContent} />
        </div>
      </NotefulContext.Provider>
    );
  }
}
