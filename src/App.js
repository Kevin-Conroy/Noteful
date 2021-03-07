import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import FolderDetail from "./FolderDetail";
import NoteDetail from "./NoteDetail";
import AddFolder from "./AddFolder";
import AddNote from "./AddNote"

export default class App extends Component {
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
          <Link to='./AddFolder'>
            Click to add a folder
          </Link>
        </addFolder>

        
          <Route path="/folderdetail" component={FolderDetail} />

          <Route path="/addfolder" component={AddFolder} />

          <Route path="/addnote" component={AddNote} />

          <Route path="/notedetail" component={NoteDetail} />
        
      </div>
    );
  }
}
