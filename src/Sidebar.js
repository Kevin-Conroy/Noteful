import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function Sidebar({folders}) {
  return (
    <div>
      <h3>Folders</h3>
      <ul className="folders">
        {folders.map((folder) => (
          <li key={folder.id}>
            <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
