import {useState} from "react";
import {useGlobalContext} from "../../context.";
import "./SearchForm.css";
import toast from "react-hot-toast";

function FilterBar() {
  const {setFilteredBooks, books} = useGlobalContext();
  const [booksFound, setBooksFound] = useState(true);
  const [query, setQuery] = useState("");

  const handleFilterChange = (value) => {
    setQuery(value);

    if (value === "") {
      setFilteredBooks(books);
      setBooksFound(true); // Reset booksFound state when clearing the query
    } else {
      const filtered = books.filter(
        (book) =>
          (book.author &&
            book.author.toLowerCase().includes(value.toLowerCase())) ||
          (book.genre && book.genre.toLowerCase().includes(value.toLowerCase()))
      );
      setFilteredBooks(filtered);

      if (filtered.length > 0) {
        setBooksFound(true);
      } else {
        setBooksFound(false);
      }
    }
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Filter by genre or author"
        onChange={(e) => handleFilterChange(e.target.value)}
        className="filter-input"
      />
      {!booksFound &&
        toast.error("No books found for the given author or genre.")}
    </div>
  );
}

export default FilterBar;
