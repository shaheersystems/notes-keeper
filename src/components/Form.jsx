import React from "react";

function Form(props) {
  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        value={props.value}
        onChange={props.handleTitle}
      />
      <textarea
        name="Notes"
        id=""
        cols="30"
        rows="10"
        placeholder="Take a note..."
        onChange={props.handleNote}
        value={props.noteValue}
      ></textarea>
      <div className="btn">
        <button onClick={props.handleClose}>Close</button>
      </div>
    </form>
  );
}
export default Form;
