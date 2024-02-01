import { useState } from "react";
import "bulma/css/bulma.min.css"; // Import Bulma CSS
import "../index.css";
import "../App.css";

function BookCreate({ submit }) {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    submit(text);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="div">
      <label>Add a book!</label>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          value={text}
          onChange={handleChange}
          placeholder="Book title"
        />
        {console.log(text)}
        <button className="button is-primary">Create!</button>
      </form>
    </div>
  );
}
export default BookCreate;
