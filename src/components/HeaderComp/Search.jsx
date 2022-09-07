import React from "react";
import styles from "./Search.module.css";
import { TbSearch } from "react-icons/tb";
const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchForm}>
        <input type="text" placeholder="Search" name="q" />
        <button>
          <TbSearch className={styles.searchIcon} />
        </button>
      </form>
    </div>
  );
};

export default Search;
