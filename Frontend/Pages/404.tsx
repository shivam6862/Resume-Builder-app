import React from "react";
import Head from "next/head";
import Style from "../Styles/Home.module.css";

const PageNotFound: React.FC = () => {
  return (
    <div className={Style.container}>
      <Head>
        <link rel="icon" href="/logo.jpeg" />
        <title>Page Not Found</title>
        <meta name="Page Not Found" content="Page Not Found" />
      </Head>
      <div className={Style.heading}>Page Not Found!</div>
    </div>
  );
};

export default PageNotFound;
