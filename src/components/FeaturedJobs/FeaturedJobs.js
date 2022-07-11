import React from "react";
import classes from "./FeaturedJobs.module.scss";

const FeaturedJobs = () => {
  return (
    <div className="container">
      <div className={classes.featured}>
        <div className={classes.featured__title}>
          <h2>
            <span>Featured </span>Job Circulars
          </h2>
        </div>

        <div className={classes.featured__jobs}>
          <div className={classes.featured__jobs__item}>
            <div className={classes.featured__jobs__item__content}>
              <div className={classes.featured__jobs__item__content__details}>
                <h3>Microsoft</h3>
                <p>Manchester, UK</p>
                <h2>Visual Designer</h2>
                <p>Full-time</p>
                <p>
                  You will be expected to lead the company's entire UI strategy.
                </p>
              </div>
              <div
                className={classes.featured__jobs__item__content__salaryapply}
              >
                <div
                  className={
                    classes.featured__jobs__item__content__salaryapply__salary
                  }
                >
                  <p>
                    <span>$2500</span>/month
                  </p>
                </div>
                <div
                  className={
                    classes.featured__jobs__item__content__salaryapply__apply
                  }
                >
                  <button>Apply Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.featured__jobs__item}>
            <div className={classes.featured__jobs__item__content}>
              <div className={classes.featured__jobs__item__content__details}>
                <h2>Apple</h2>
                <p>London, UK</p>
                <h2>Senior UI Designer</h2>
                <p>Full-time</p>
                <p>
                  You will be expected to lead the company's entire UI strategy.
                </p>
              </div>

              <div
                className={classes.featured__jobs__item__content__salaryapply}
              >
                <div
                  className={
                    classes.featured__jobs__item__content__salaryapply__salary
                  }
                >
                  <p>
                    <span>$2500</span>/month
                  </p>
                </div>
                <div
                  className={
                    classes.featured__jobs__item__content__salaryapply__apply
                  }
                >
                  <button>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
