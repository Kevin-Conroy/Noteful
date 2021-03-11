import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import data from "./Folders";
import NoteDetail from "./NoteDetail";

export default function FolderDetail(props) {
  console.log(data);
  const selectedFolder = data.folders.find(
    (f) => f.id === props.match.params.folderId
  );

  const selectedNotes = data.notes.filter(
    (n) => n.folderId === selectedFolder.id
  );
  console.log(selectedNotes);
  console.log(selectedFolder);

  return (
    <div>
      <h3>Folder Detail</h3>
      <h3>{selectedFolder.name}</h3>
      {selectedNotes.map((note) => (
        <NoteDetail name={note.name} modified={note.modified} />
      ))}
    </div>
  );
}

/*
export default function PoemPage(props) {
  const poem = POEMS.find(p =>
    p.id === props.match.params.poemId
  )
  return (
    <article className='Poem'>
      <h2>{poem.title}</h2>
      {poem.content.map((p, i) =>
        (p === '')
          ? <br key={i} />
          : <p key={i}>{p}</p>
      )}
    </article>
  )
}
*/
