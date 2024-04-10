import React, {useState, useContext, useEffect} from "react";
import {useCallback} from "react";
import coverBackup from "./images/cover_not_found.jpg";

const URL = "https://d1krvzwx5oquy1.cloudfront.net/books.json";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}`);
      const data = await response.json();
      console.log(data);

      if (data) {
        const newBooks = data.map((bookSingle) => {
          const {id, saleInfo, volumeInfo} = bookSingle;

          return {
            id,
            author: volumeInfo.authors ? volumeInfo.authors[0] : "",
            genre: volumeInfo.categories ? volumeInfo.categories[0] : "",
            title: volumeInfo.title,
            cover_img: volumeInfo.imageLinks?.thumbnail
              ? volumeInfo.imageLinks.thumbnail
              : coverBackup,
            description: volumeInfo.description ? volumeInfo.description : "",
            pageCount: volumeInfo.pageCount,
            preview: volumeInfo.previewLink,
            publisher: volumeInfo.publisher ? volumeInfo.publisher : "",
            published_date: volumeInfo.publishedDate,
            rating: volumeInfo.averageRating
              ? `${volumeInfo.averageRating}⭐`
              : "Not_Available",
            buy_link: saleInfo.buyLink ? saleInfo.buyLink : "NOT FOR SALE",
            price: saleInfo.listPrice?.amount ? saleInfo.listPrice?.amount : "",
          };
        });

        setBooks(newBooks);
        setFilteredBooks(newBooks);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        filteredBooks,
        setFilteredBooks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
