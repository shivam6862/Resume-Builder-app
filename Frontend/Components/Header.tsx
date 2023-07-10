import React, { useContext } from "react";
import Link from "next/link";
import AuthenticationContext from "../Store/Authentication-context";
import styles from "../Styles/Header.module.css";
import Svgsign from "../Public/Svgsign";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const authenticationContextCtx = useContext(AuthenticationContext);
  return (
    <div className={styles.container}>
      <Link className={styles.heading} href={"/"}>
        Resume Builder
      </Link>
      {pathname === "/" && (
        <Link className={styles.button} href={"/editresume"}>
          Edit Resume
        </Link>
      )}
      {pathname === "/" && (
        <div
          className={styles.right_part}
          onClick={() => {
            authenticationContextCtx.onShow("LogInOpen");
          }}
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "1rem",
            top: "4rem",
          }}
        >
          <Svgsign />
        </div>
      )}
    </div>
  );
};

export default Header;
