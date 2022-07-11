import React from "react";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import classes from "./SearchBar.module.scss";
const SearchBar = (props) => {
  return (
    <div className={classes["job-search__search-container"]}>
      <div className={classes["job-search__search-container__inputs"]}>
        <div
          className={`${classes["job-search__search-container__inputs__input-container"]} ${classes["job-search__search-container__inputs__input-container--border-left"]}`}
        >
          <label htmlFor="job-title">
            <BsSearch />
          </label>
          <input
            id="job-title"
            type="text"
            placeholder="Job title or keyword"
            value={props?.searchValues?.jobTitle}
          />
        </div>
        <div
          className={
            classes["job-search__search-container__inputs__input-container"]
          }
        >
          <label htmlFor="city">
            <GoLocation />
          </label>
          <input
            id="city"
            type="text"
            placeholder="New York, USA"
            value={props?.searchValues?.location}
          />
        </div>
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
