import React from "react";
import { useState } from "react";
function Card(props) {
  const [index, setIndex] = useState(0);
  const color = [
    "#fafafa",
    "#f28b82",
    "#f8bbd0",
    "#feefc3",
    "#ff6e40",
    "#ffbc00",
    "#1de9b6",
  ];
  return (
    <div className="card" id={props.id} style={{ background: color[index] }}>
      <div className="data">
        <h2>{props.title}</h2>
        <p>{props.note}</p>
      </div>
      <div className="metadata">
        <span
          className="material-icons"
          title="delete note"
          onClick={props.handleDelete}
        >
          delete_sweep
        </span>
        <span
          className="material-icons"
          title="change color"
          onClick={() => setIndex(index === 6 ? 0 : index + 1)}
        >
          palette
        </span>
      </div>
    </div>
  );
}
export default Card;
