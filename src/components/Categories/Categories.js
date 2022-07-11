import React from "react";
import classes from "./Categories.module.scss";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaWpforms, FaRegMoneyBillAlt, FaRegHandshake } from "react-icons/fa";
import { RiCustomerServiceLine, RiPoliceCarLine } from "react-icons/ri";
import { BsFiles } from "react-icons/bs";

const Categories = () => {
  return (
    <div className="container container--bg-dimmer">
      <div className={classes.categories}>
        <div className={classes["categories__title"]}>
          <h2>
            One Platform
            <br /> Many <span>Solutions</span>
          </h2>
        </div>
        <div className={classes["categories__items"]}>
          <div className={classes["categories__items__category-item"]}>
            <div
              className={classes["categories__items__category-item__content"]}
            >
              <HiOutlineSpeakerphone />
              <h3>Marketing & Communications</h3>
              <p>58 Jobs Available</p>
            </div>
          </div>
          <div className={classes["categories__items__category-item"]}>
            <div
              className={classes["categories__items__category-item__content"]}
            >
              <MdOutlineDesignServices />
              <h3>Design & Development</h3>
              <p>120 Jobs Available</p>
            </div>
          </div>
          <div className={classes["categories__items__category-item"]}>
            <div
              className={classes["categories__items__category-item__content"]}
            >
              <FaWpforms />
              <h3>Human Research & Development</h3>
              <p>199 Jobs Available</p>
            </div>
          </div>
          <div className={classes["categories__items__category-item"]}>
            <div
              className={classes["categories__items__category-item__content"]}
            >
              <FaRegMoneyBillAlt />
              <h3>Finance Management</h3>
              <p>237 Jobs Available</p>
            </div>
          </div>
          <div className={classes["categories__items__category-item"]}>
            <div
              className={classes["categories__items__category-item__content"]}
            >
              <RiPoliceCarLine />
              <h3>Armforce Guide & Security</h3>
              <p>120 Jobs Available</p>
            </div>
          </div>
          <div className={classes["categories__items__category-item"]}>
            <div
              className={classes["categories__items__category-item__content"]}
            >
              <FaRegHandshake />
              <h3>Business & Consulting</h3>
              <p>47 Jobs Available</p>
            </div>
          </div>
          <div className={classes["categories__items__category-item"]}>
            <div
              className={classes["categories__items__category-item__content"]}
            >
              <RiCustomerServiceLine />
              <h3>Customer Support Care</h3>
              <p>20 Jobs Available</p>
            </div>
          </div>
          <div className={classes["categories__items__category-item"]}>
            <div
              className={classes["categories__items__category-item__content"]}
            >
              <BsFiles />
              <h3>Project Management</h3>
              <p>87 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
