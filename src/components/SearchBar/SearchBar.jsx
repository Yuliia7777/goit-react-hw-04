import { useId } from "react";
import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ submit }) => {
  const [query, setQuery] = useState("");
  const searchQueryId = "searchQueryId" + useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!checkQuery(query)) return;
    submit(query);
    setQuery("");
    form.reset();
  };
  const handleClear = () => {
    setQuery("");
  };
  const checkQuery = (query) => {
    const checkValue = query.trim() !== "";
    if (!checkValue) {
      toast.error("Please enter a search query");
    }
    return checkValue;
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css["input-container"]}>
          <input
            type="text"
            name="query"
            value={query}
            id={searchQueryId}
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search images and photos"
            autoFocus
          />
          <FaSearch
            className={`${css.icon} ${css["search-icon"]}`}
            // onClick={handleSearch}
          />
          {query && (
            <FaTimes
              className={`${css.icon} ${css["clear-icon"]}`}
              onClick={handleClear}
            />
          )}
        </div>
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
