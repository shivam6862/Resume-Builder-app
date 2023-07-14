import React, { useEffect, useState } from "react";
import Style from "../Styles/Resume.module.css";
import SvgRefresh from "../Public/Svg";
import { useLocationLocalStorage } from "../Hook/LocationLocalStorage";
import useGenerateResume from "../Hook/useGenerateResume";

const Pdf: React.FC = () => {
  const [URLRESUME, setURLRESUME] = useState<string>("");
  const { GenerateResume } = useGenerateResume();
  useEffect(() => {
    const callingBacendForResumecreation = async () => {
      const { fetchPersonalDetails } = useLocationLocalStorage();
      const userId = fetchPersonalDetails().id;
      const response = await GenerateResume(userId);
      const urlresume = `http://localhost:8080/${userId}.pdf`;
      setURLRESUME(urlresume);
    };
    callingBacendForResumecreation();
  }, []);
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
