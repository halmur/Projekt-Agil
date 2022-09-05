import React from "react";
import styles from "./Signup.module.css";
import { FaUserAlt} from "react-icons/fa";

const Signup = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <form className={styles.subContainer}>
          <FaUserAlt className={styles.icon}/>
            <h1>Sign in here</h1>
            <p>Username</p>
            <input type="text" placeholder="Enter username" />
            <p>Password</p>
            <input type="password" placeholder="Enter password" />
            <input type="submit" value="Login" />
            <a href="#">Lost your password?</a>
            <a href="#">Don't have an account?</a>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
