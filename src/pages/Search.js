import React from "react";
import Categories from "../components/Categories/Categories";
import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";
import JobSearch from "../components/JobSearch/JobSearch";

const PageOne = () => {
  return (
    <>
      <JobSearch />
      <Categories />
      <FeaturedJobs />
    </>
  );
};

export default PageOne;
