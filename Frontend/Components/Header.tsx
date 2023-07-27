import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AuthenticationContext from "../Store/Authentication-context";
import styles from "../Styles/Header.module.css";
import Svgsign from "../Public/Svgsign";
import { useRouter } from "next/router";
import { useLocationLocalStorage } from "../Hook/LocationLocalStorage";
import SvgLogOut from "../Public/SvgLogOut";
import SvgEdit from "../Public/SvgEdit";

interface setIsloginProps {
  setIslogin?: (current: boolean) => void;
}

const Header: React.FC<setIsloginProps> = ({ setIslogin }) => {
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
  }, [user, authenticationContextCtx.details]);

  const logout = () => {
    setUser(null);
    removePersonalDetails();
    if (setIslogin) setIslogin(false);
  };

  return (
    <div className={styles.container}>
      <Link className={styles.heading} href={"/"}>
        Resume Builder App
      </Link>
      {user == null && (
        <div
          className={styles.right_part_1}
          onClick={() => {
            authenticationContextCtx.onShow("LogInOpen");
          }}
        >
          <Svgsign />
        </div>
      )}
      {user != null && (
        <div className={styles.right_part} onClick={logout}>
          <SvgLogOut />
        </div>
      )}
      <div className={styles.signouthover}>Sign out</div>
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
          <SvgEdit />
        </Link>
      )}
      <div className={styles.edithover}>Edit Resume</div>
    </div>
  );
};

export default Header;
