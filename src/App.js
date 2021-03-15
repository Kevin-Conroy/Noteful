import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import FolderDetail from "./FolderDetail";
import NoteSummary from "./NoteSummary";
import AddFolder from "./AddFolder";
import AddNote from "./AddNote";
import initialState from "./Folders";
import NoteContent from "./NoteContent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
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

        <Route
          path="/notecontent/:noteId"
          render={(routerProps) => {
            const note = this.state.notes.find((n) => n.id === routerProps.match.params.noteId);
            const folder = this.state.folders.find((f) => f.id === note.folderId);
            return <NoteContent note={note} folder={folder} />;
          }}
        />
      </div>
    );
  }
}
