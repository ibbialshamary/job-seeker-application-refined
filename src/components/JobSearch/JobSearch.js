import React from "react";
import classes from "./JobSearch.module.scss";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import SearchBar from "../SearchBar/SearchBar";

const JobSearch = () => {
  return (
    <>
      <div className="container">
        <div className={classes["job-search"]}>
          <div className={classes["job-search__titles"]}>
            <h1>
              Get The <span>Right Job</span>
              <br /> You Deserve
            </h1>
            <p>1,800,570 jobs listed here! Your dream job is waiting</p>
          </div>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default JobSearch;
