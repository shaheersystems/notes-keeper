import React from "react";

function Form() {
  return (
    <form action="POST">
      <input type="text" placeholder="Title" />
      <textarea
        name="Notes"
        id=""
        cols="30"
        rows="10"
        placeholder="Take a note..."
      ></textarea>
      <div className="btn">
        <button>Close</button>
      </div>
    </form>
  );
}
export default Form;
