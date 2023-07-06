import React from "react";
import Head from "next/head";
import styles from "../../Styles/editresume.module.css";
import Header from "../../Components/Header";
import NavigationBar from "../../Components/NavigationBar";

const editresume: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <Header />
      <NavigationBar />
      <div className={styles.editContainer}>Edit Resume Page</div>
    </div>
  );
};

export default editresume;
