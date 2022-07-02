import React from "react";

function Navabar() {
  return (
    <div className="nav-wrap">
      <div className="nav">
        <div className="logo">
          <h2>NotesKeeper</h2>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="icons">
          <a href="/">View Github Repo</a>
        </div>
      </div>
    </div>
  );
}

export default Navabar;
