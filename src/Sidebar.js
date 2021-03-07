import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from "react-router-dom";

class Sidebar extends Component {
    render() {
        return(
            <div>
                <ol>
                <Link to='./FolderDetail'>
                <li>Folder #1</li>
                </Link>
                <Link to='./FolderDetail'>
                <li>Folder #2</li>
                </Link>
                <Link to='./FolderDetail'>
                <li>Folder #3</li>
                </Link>
                </ol>
            </div>
        )
    }
}

export default Sidebar