import React, { Component } from "react";
import NotefulContext from "./Context";
import NotefulError from "./ErrorBoundary"
import PropTypes from 'prop-types';




export default function NoteSummary(props) {
  console.log(props);

  return (
    
    <NotefulContext.Consumer>
      {({ handleDelete }) => (
        <div>
          <div>name: {props.name}</div>
          <div>modified: {props.modified}</div>
          <button onClick={(event) => handleDelete(event, props.id)}>Delete</button>
        </div>
      )}
    </NotefulContext.Consumer>
 
  );
}

NoteSummary.propTypes = {
  name: PropTypes.string.isRequired,
  modified: PropTypes.string,
  id: PropTypes.string.isRequired

};



