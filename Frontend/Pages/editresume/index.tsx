import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../Styles/editresume.module.css";
import Header from "../../Components/Header";
import NavigationBar from "../../Components/NavigationBar";
import Resume from "../../Components/Resume";
import Pdf from "../../Components/Pdf";
import { useLocationLocalStorage } from "../../Hook/LocationLocalStorage";

const editresume: React.FC = () => {
  const router = useRouter();
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const [current, setCurrent] = useState<number>(0);
  const [islogin, setIslogin] = useState<Boolean>(false);

  useEffect(() => {
    const userDetails = fetchPersonalDetails();
    if (userDetails == undefined || userDetails == null) {
      router.push("/");
    }
    if (userDetails !== undefined && userDetails !== null) setIslogin(true);
  }, [islogin]);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header setIslogin={setIslogin} />
      {islogin && (
        <>
          <NavigationBar setCurrent={setCurrent} current={current} />
          <div className={styles.editContainer}>
            <div className={styles.left}>
              <Resume current={current} />
            </div>
            <div className={styles.right}>
              <Pdf />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default editresume;
