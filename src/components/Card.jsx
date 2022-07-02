import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="data">
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, at!
        </p>
      </div>
      <div className="metadata">
        <span class="material-icons" title="delete note">
          delete_sweep
        </span>
        <span class="material-icons" title="change color">
          palette
        </span>
      </div>
    </div>
  );
}
export default Card;
