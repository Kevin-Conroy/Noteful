import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import data from "./Folders";
import NoteSummary from "./NoteSummary";


export default function NoteContent(props) {
  return (
  <div>
    <h3>{props.folder.name}</h3>
    <p>Content: {props.note.content}</p>
  </div>
  );
}


//grab id from URL

//Find id in the notes

//Display the notes, or display an error message