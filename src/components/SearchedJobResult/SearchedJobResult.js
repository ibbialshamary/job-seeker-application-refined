import React from "react";
import classes from "./SearchedJobResult.module.scss";
import SearchBar from "../SearchBar/SearchBar.js";
import { MdVerifiedUser } from "react-icons/md";
import { IoTime } from "react-icons/io5";

const SearchedJobResult = () => {
  const searchQueries = {
    jobTitle: "Front End Developer",
    location: "Manchester, UK",
  };
  return (
    <div className="container">
      <div className={classes["job-results"]}>
        <h2>Software Engineer roles in Manchester</h2>
        <SearchBar searchValues={searchQueries} />
        <div className={classes["job-results__results-count"]}>
          <p>Showing: 900 results</p>
        </div>
        <div className={classes["job-results__jobs-container"]}>
          <div className={classes["job-results__jobs-container__job"]}>
            <div
              className={classes["job-results__jobs-container__job__column-a"]}
            >
              <div
                className={
                  classes["job-results__jobs-container__job__column-a__title"]
                }
              >
                <h2>Software Engineer</h2>
                <div
                  className={
                    classes[
                      "job-results__jobs-container__job__column-a__title__labels"
                    ]
                  }
                >
                  <div
                    className={
                      classes[
                        "job-results__jobs-container__job__column-a__title__labels__poster-verified"
                      ]
                    }
                  >
                    <div>
                      <MdVerifiedUser />
                      <p>Registered and Verified Poster</p>
                    </div>
                  </div>

                  <div
                    className={
                      classes[
                        "job-results__jobs-container__job__column-a__title__labels__posted-time"
                      ]
                    }
                  >
                    <div>
                      <IoTime />
                      <p>Posted 10 minutes ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={classes["job-results__jobs-container__job__column-b"]}
            >
              <div
                className={
                  classes[
                    "job-results__jobs-container__job__column-b__salary__amount"
                  ]
                }
              >
                <h3>£40,000</h3>
              </div>
              <div
                className={
                  classes[
                    "job-results__jobs-container__job__column-b__salary__frequency"
                  ]
                }
              >
                <p>Per year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedJobResult;
