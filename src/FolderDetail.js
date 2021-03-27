import React, { Component } from "react";
import { Link } from "react-router-dom";
import NoteSummary from "./NoteSummary";
import NotefulContext from "./Context";
import NotefulError from "./ErrorBoundary";
import PropTypes from "prop-types";

export default function FolderDetail(props) {
  return (
    <NotefulContext.Consumer>
      {(data) => {
        if (data.loading) {
          return (
            <div>
              <h3>Loading...</h3>
            </div>
          );
        }
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
            <h4>Folder Detail</h4>
            <h3>{selectedFolder.name}</h3>
            {selectedNotes.map((note) => (
              <Link to={"/NoteContent/" + note.id}>
                <NoteSummary
                  name={note.name}
                  modified={note.modified}
                  id={note.id}
                />
              </Link>
            ))}

            <Link to="/AddNote">
              <button type="button">Click to add a note</button>
            </Link>
          </div>
        );
      }}
    </NotefulContext.Consumer>
  );
}

FolderDetail.propTypes = {
  selectedNotes: PropTypes.array,
  selectedFolder: PropTypes.array,
};
