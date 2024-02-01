import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, handledelete, onedit }) {
  const [edit, setedit] = useState(false);
  const handleclick = () => {
    handledelete(book.id);
  };

  const handleedit = () => {
    setedit(!edit);
  };

  const handlesubmit = (id, newtitle) => {
    setedit(false);
    onedit(id, newtitle);
  };
  let content = <h3>{book.title}</h3>;
  if (edit) {
    content = <BookEdit onSubmit={handlesubmit} book={book} />;
  }
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt="photos" />
      <div>{content}</div>
      <div className="actions">
        <button onClick={handleclick}> X </button>
        <button className="edit" onClick={handleedit}></button>
      </div>
    </div>
  );
}

export default BookShow;
