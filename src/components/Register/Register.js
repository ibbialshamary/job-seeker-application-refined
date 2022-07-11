import React from "react";
import "./Register.module.scss";
import classes from "./Register.module.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className={classes.register}>
        <div className={classes.register__heading}>
          <h2>Register</h2>
        </div>
        <div className={classes.register__body}>
          <div className={classes["register__body__names"]}>
            <div className={classes["register__body__names__first"]}>
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className={classes["register__body__names__last"]}>
              <label>Last Name</label>
              <input type="text" placeholder="Smith" />
            </div>
          </div>
          <div className={classes.register__body__email}>
            <label>Email address</label>
            <input type="email" placeholder="name@mail.com" />
          </div>
          <div className={classes["register__body__passwords"]}>
            <div className={classes["register__body__passwords__password"]}>
              <label>Password</label>
              <input type="password" />
            </div>
            <div
              className={classes["register__body__passwords__confirm-password"]}
            >
              <label>Confirm Password</label>
              <input type="password" />
            </div>
          </div>

          <div className={classes["register__body__cta"]}>
            <button>Register</button>
          </div>
          <div className={classes["register__body__register-instead"]}>
            <label>
              Already have an account? <Link to="/register">Register</Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
