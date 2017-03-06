import React from "react";

function Book(book) {
  return (
    <li key={book.title}>
      <strong>{book.title}</strong> from {book.author}
    </li>
  );
}

function Books(props) {
  if (!props || !props.books) return null;
  return <ul>{props.books.map(Book)}</ul>;
}

export default Books;
