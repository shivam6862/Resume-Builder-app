import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Home from "../Components/Home";
import styles from "../Styles/editresume.module.css";
import Auth from "../Components/Authentication/Auth";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <Header />
      <Home />
      <Auth />
    </div>
  );
};

export default HomePage;
