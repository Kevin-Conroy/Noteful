import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from "react-router-dom";
import data from "./Folders"

const { folders, notes } = data;

export default function Sidebar() {
        return(
            <div>
                <h3>Folders</h3>
                <ul className='folders'>
                    {folders.map(folder =>
                        <li key={folder.id}>
                        <Link to={`/folder/${folder.id}`}>
                                 {folder.name}
                        </Link>
                        </li>)}
                </ul>
               
            </div>
        )
    }




/*

export default function PoemListPage() {
  return (
    <>
      <p>Choose a poem from the list below.</p>
      <ul className='PoemList'>
        {POEMS.map(poem =>
          <li key={poem.id}>
            <Link to={`/poem/${poem.id}`}>
              {poem.title}
              </Link>
          </li>
        )}
      </ul>
    </>
  )
}
*/