import React from "react";
import {useGlobalContext} from "../../context.";
import Book from "./Book";
import Loading from "../Loader/Loader";
import "./BookList.css";

const BookList = () => {
  const {filteredBooks, loading} = useGlobalContext();

  if (loading) return <Loading />;

  return (
    <>
      <section className="booklist">
        <div className="container">
          <div className="section-title">
            <h2>BOOKS LIST</h2>
          </div>
          <div className="booklist-content grid">
            {filteredBooks.map((book) => {
              return <Book key={book.id} {...book} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookList;
