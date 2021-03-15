import React, { Component } from "react";

import { Link } from "react-router-dom";
import data from "./Folders";
import NoteSummary from "./NoteSummary";

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
        <Link to={"/NoteContent/" + note.id}>
          <NoteSummary name={note.name} modified={note.modified} />
        </Link>
      ))}
    </div>
  );
}
