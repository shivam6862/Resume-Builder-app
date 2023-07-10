import React, { MouseEventHandler } from "react";

interface BackdropProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return (
    <div>
      <div
        onClick={onClick}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          opacity: "0.7",
          zIndex: "10",
          display: "block",
          color: "black",
          backgroundColor: "black",
        }}
      ></div>
    </div>
  );
};

export default Backdrop;
