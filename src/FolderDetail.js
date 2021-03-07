import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Route, Switch, Link  } from "react-router-dom";

class FolderDetail extends Component {
    render() {
        return (
            <div>
               
            <h3>Here is some information about this folder</h3>
                <Link to='./NoteDetail'>
              <h4>Click here for this folder's content</h4>
                </Link>
                
            </div>
        )
    }
}

export default FolderDetail