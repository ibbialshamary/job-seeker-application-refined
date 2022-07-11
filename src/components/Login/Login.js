import React from "react";
import classes from "./Login.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className={classes.login}>
        <div className={classes.login__heading}>
          <h2>Login</h2>
        </div>
        <div className={classes.login__body}>
          <div className={classes.login__body__email}>
            <label>Email address</label>
            <input type="text" placeholder="name@mail.com" />
          </div>
          <div className={classes.login__body__password}>
            <label>Password</label>
            <div className={classes["login__body__password__input"]}>
              <input type="password" />
              <div
                className={
                  classes["login__body__password__input__reset-password"]
                }
              >
                <Link to="/">Reset Password</Link>
              </div>
            </div>
          </div>
          <div className={classes["login__body__remember-me"]}>
            <input id="remember-me" type="checkbox" />
            <label htmlFor="remember-me">Remember me</label>
            <span className={classes.checkmark} />
          </div>
          <div className={classes["login__body__cta"]}>
            <button>Login</button>
          </div>
          <div className={classes["login__body__register-instead"]}>
            <label>
              Don't have an account? <Link to="/register">Register</Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
