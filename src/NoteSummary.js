import React, { Component } from "react";

export default function NoteSummary(props) {
  console.log(props);

  return (
    <div>
      <ul>
        name: {props.name}
        <br></br>
        modified: {props.modified}
      </ul>
    </div>
  );
}
