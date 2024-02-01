import BookShow from "./Bookshow";

function BookList({ books, handledelete, onedit }) {
  const render = books.map((book) => {
    return (
      <BookShow
        handledelete={handledelete}
        key={book.id}
        book={book}
        onedit={onedit}
      />
    );
  });
  return <div className="book-list">{render}</div>;
}

export default BookList;
