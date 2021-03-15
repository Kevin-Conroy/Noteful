import React from "react";

export default function NoteContent(props) {
  return (
    <div>
      <h3>{props.folder.name}</h3>
      <h2>{props.note.name}</h2>
      <h5>Modified: {props.note.modified}</h5>
      <p>Content: {props.note.content}</p>
    </div>
  );
}
