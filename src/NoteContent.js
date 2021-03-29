import React from "react";
import NotefulContext from "./Context";
import NotefulError from "./ErrorBoundary"


export default function NoteContent(props) {
  return (
    <NotefulContext.Consumer>
      
      {(data) => {
        if(data.loading){
          return(
            <div>
              <h3>Loading...</h3>
            </div>
          )
        }
        const note = data.notes.find(
          (n) => n.id === props.match.params.noteId
        );
        const folder = data.folders.find((f) => f.id === note.folderId);

        return (
          <div>
            <h3>{folder.name}</h3>
            <h2>{note.name}</h2>
            <h5>Modified: {note.modified}</h5>
            <p>Content: {note.content}</p>

          </div>
        );
      }}
      
    </NotefulContext.Consumer>
  );
}


