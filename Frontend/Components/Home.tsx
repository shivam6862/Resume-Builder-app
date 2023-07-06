import React from "react";
import Style from "../Styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={Style.container}>
      <div className={Style.heading}>Welcome to Resume Builder App!</div>
    </div>
  );
};

export default Home;
