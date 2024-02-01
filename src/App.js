import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import Booklist from "./components/Booklist";

function App() {
  const [books, setbooks] = useState([]);

  const edit = (id, newtitle) => {
    const update = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newtitle };
      }
      return book;
    });
    setbooks(update);
  };
  const createbook = (title) => {
    setbooks([...books, { id: Math.round(Math.random() * 999), title: title }]);

    // if we want to add elements to middle of array
    /// const update = [
    /// ...colors.slice(0,index),
    /// newcolor,
    /// ...colors.slice(index)
  };

  const handledelete = (id) => {
    const newbooks = books.filter((book) => {
      return book.id !== id;
    });

    setbooks(newbooks);
  };

  return (
    <div className="App">
      <Booklist books={books} handledelete={handledelete} onedit={edit} />
      <BookCreate submit={createbook} />
    </div>
  );
}
export default App;
