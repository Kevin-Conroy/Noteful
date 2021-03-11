import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import FolderDetail from './FolderDetail'
import data from './Folders'

export default function NoteDetail(props) {
  console.log(props)
  return (
    <div>
      <ul>
        name: {props.name}<br></br>
        modified: {props.modified}
        
      </ul>
    </div>
  )
}






/*
function NoteDetail(props) {
  const thisNote = data.notes.find(note => note.id === props.selectedFolder.id)
  const thisFolder = data.folders.find(folder => folder.id === thisNote.folderId)
  console.log(thisNote)
  console.log(thisFolder)

    return (
        <div>
          <p> This is where I want selectedNotes to display </p>
        </div>
       
    )
}

export default NoteDetail


export default function FolderDetail(props) {
  console.log(data)
   const selectedFolder = data.folders.find(f =>
    f.id === props.match.params.folderId
    )

    const selectedNotes = data.notes.filter(n => n.folderId === selectedFolder.id)
    console.log(selectedNotes)
    console.log(selectedFolder)
    return (
      <div>
        <h3>Folder Detail</h3>
        
        <p>{selectedFolder.name}</p>

      </div>
    )
}
*/