import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Book";
import { bookArray } from "./books";


import "./index.css";

const BookList = () => {
  return (
    <section className="bookList">
      {bookArray.map((book) => {
        return (
          <Book key={book.id} {...book}>
            {`${book.title} by ${book.author} is a must-read for 2023 - New York Times`}
          </Book>
        );
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
