import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import FolderDetail from "./FolderDetail";
import NoteDetail from "./NoteDetail";
import AddFolder from "./AddFolder";
import AddNote from "./AddNote";
import initialState from "./Folders";

export default class App extends Component {
  constructor(props) {
    super(props)
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
          <Link to="./AddFolder">Click to add a folder</Link>
        </addFolder>
        
        <Route path="/folder/:folderId" component={FolderDetail} />

        <Route path="/addfolder" component={AddFolder} />

        <Route path="/addnote" component={AddNote} />
        
        <Route path="/notedetail:noteId"
        
        //this is where the NoteContent component will live 
        
        />
       
        
        

      </div>
    );
  }
}
/*
<Route
  path='/foo'
  render={(routerProps) =>
    <FooSidebar
      aFoo={this.state.foos.find(foo => foo.id === routeProps.match.params.foodId)}
    />
  }
/>
*/
