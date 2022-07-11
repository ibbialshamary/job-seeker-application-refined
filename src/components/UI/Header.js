import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      // set this to false is window width is 768 and the menu is open
      // this will remove the isMenu class in the nav element so the
      // ul and its elements will be visible again
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          Basra
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/my-jobs">My Jobs</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <button
            className={`${classes.header__content__nav__button} ${classes["header__content__nav__button--secondary"]}`}
            onClick={() => navigate("/register")}
          >
            Register Now
          </button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={() => setMenuOpen(true)} />
          ) : (
            <AiOutlineClose onClick={() => setMenuOpen(false)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
