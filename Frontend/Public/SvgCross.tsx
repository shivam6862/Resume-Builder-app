import React from "react";
import Styles from "../Styles/Resume.module.css";

const SvgCross: React.FC = () => {
  return (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 5L4.99998 19M5.00001 5L19 19"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgCross;
