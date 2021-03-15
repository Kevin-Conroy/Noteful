import React from "react";

export default function NoteContent(props) {
  return (
    <div>
      <h3>{props.folder.name}</h3>
      <p>Content: {props.note.content}</p>
    </div>
  );
}
