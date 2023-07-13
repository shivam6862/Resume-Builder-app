import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AuthenticationContext from "../Store/Authentication-context";
import styles from "../Styles/Header.module.css";
import Svgsign from "../Public/Svgsign";
import { useRouter } from "next/router";
import { useLocationLocalStorage } from "../Hook/LocationLocalStorage";

const Header: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const authenticationContextCtx = useContext(AuthenticationContext);
  const { fetchPersonalDetails, removePersonalDetails } =
    useLocationLocalStorage();
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    const user = fetchPersonalDetails();
    if (user != undefined) {
      setUser(user.email);
    }
  }, []);
  const logout = () => {
    removePersonalDetails();
  };
  return (
    <div className={styles.container}>
      <Link className={styles.heading} href={"/"}>
        Resume Builder
      </Link>
      {user == null && (
        <div
          className={styles.right_part}
          onClick={() => {
            authenticationContextCtx.onShow("LogInOpen");
          }}
        >
          <Svgsign />
        </div>
      )}
      {user != null && (
        <div className={styles.right_part} onClick={logout}>
          Log out
        </div>
      )}
      {pathname === "/" && user != null && (
        <Link
          className={styles.button}
          href={"/editresume"}
          style={{
            position: "absolute",
            right: "1rem",
            top: "4rem",
          }}
        >
          Edit Resume
        </Link>
      )}
    </div>
  );
};

export default Header;
