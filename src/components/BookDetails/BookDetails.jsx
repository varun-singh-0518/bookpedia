import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import coverImg from "../../images/cover_not_found.jpg";
import {FaArrowLeft} from "react-icons/fa";
import "./BookDetails.css";
import {useGlobalContext} from "../../context.";

const BookDetails = () => {
  const {books} = useGlobalContext();
  const {id} = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    function getBookDetails() {
      try {
        if (books) {
          const foundBook = books.find((item) => item.id.toString() === id);

          console.log(foundBook);

          if (foundBook) {
            setBook(foundBook);
          } else {
            setBook(null);
          }
        } else {
          setBook(null);
        }
      } catch (err) {
        console.log(err);
      }
    }

    getBookDetails();
  }, [id, books]);

  if (!book) {
    return <div>No book found with ID: {id}</div>;
  }

  return (
    <section className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={book?.cover_img || coverImg} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{book.title}</span>
            </div>
            <div className="book-details-item description">
              <span>{book.description}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Book Autohr: </span>
              <span className="text-italic">{book.author}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Book Publisher: </span>
              <span className="text-italic">{book.publisher}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Published Date: </span>
              <span className="text-italic">{book.published_date}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Price: </span>
              <span className="text-italic">Rs. {book.price}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Book Rating: </span>
              <span className="text-italic">{book.rating}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Page Count: </span>
              <span className="text-italic">{book.pageCount}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Preview Link: </span>
              <a href={book.preview} target="_blank" rel="noopener noreferrer">
                {book.preview}
              </a>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Buy link: </span>
              <a href={book.buy_link} target="_blank" rel="noopener noreferrer">
                {book.buy_link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
