import React from "react";
import styles from "./styles.module.css";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Logout;
