import React, { useState } from "react";
import Head from "next/head";
import styles from "../../Styles/editresume.module.css";
import Header from "../../Components/Header";
import NavigationBar from "../../Components/NavigationBar";
import Resume from "../../Components/Resume";
import Pdf from "../../Components/Pdf";

const editresume: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <Header />
      <NavigationBar setCurrent={setCurrent} />
      <div className={styles.editContainer}>
        <div className={styles.left}>
          <Resume current={current} />
        </div>
        <div className={styles.right}>
          <Pdf />
        </div>
      </div>
    </div>
  );
};

export default editresume;
