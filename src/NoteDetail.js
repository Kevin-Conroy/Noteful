import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class NoteDetail extends Component {
    render() {
        return (
            <div>
                 <h3>Here are some note details.</h3>
                 <div>
                 <Link to='./AddNote'>
                     Click here to add a note
                 </Link>
                 </div>
                 <div>
                 <Link to='./'>
                     Go to homepage
                 </Link>
                 </div>
            </div>
        )
    }
}

export default NoteDetail