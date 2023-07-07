import React from "react";
import Style from "../Styles/Resume.module.css";
import SvgRefresh from "../Public/Svg";

const Pdf: React.FC = () => {
  const URLRESUME =
    "http://localhost:8080/393a6fb2-7177-4c3a-9905-1cb62a36bd7b.pdf";
  return (
    <div className={Style.container_PDFPart}>
      <div className={Style.refresh}>
        <div className={Style.refreshText}>
          <SvgRefresh />
          Refresh
        </div>
      </div>
      <iframe src={URLRESUME} width="100%" height="500px" title="PDF Viewer" />
    </div>
  );
};

export default Pdf;
