import React from "react";
import Link from "next/link";
import styles from "../Styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.heading} href={"/"}>
        Resume Builder
      </Link>
      <Link className={styles.button} href={"/editresume"}>
        Edit Resume
      </Link>
    </div>
  );
};

export default Header;
