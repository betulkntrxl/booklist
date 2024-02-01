import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [name, setname] = useState(book.title);

  const handlename = (event) => {
    setname(event.target.value);
  };

  const onclick = (event) => {
    event.preventDefault();
    onSubmit(book.id, name);
  };

  return (
    <div>
      <form onSubmit={onclick}>
        <span>
          <label>New title</label>
          <input className="form" value={name} onChange={handlename}></input>
        </span>
        <div>
          <button> save</button>
        </div>
      </form>
    </div>
  );
}

export default BookEdit;
