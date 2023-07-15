import React, { useEffect, useState } from "react";
import Style from "../Styles/Resume.module.css";
import SvgRefresh from "../Public/Svg";
import { useLocationLocalStorage } from "../Hook/LocationLocalStorage";
import useGenerateResume from "../Hook/useGenerateResume";

const Pdf: React.FC = () => {
  const [URLRESUME, setURLRESUME] = useState<string>("");
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const { GenerateResume } = useGenerateResume();
  useEffect(() => {
    const callingBacendForResumecreation = async () => {
      const { fetchPersonalDetails } = useLocationLocalStorage();
      const userId = fetchPersonalDetails().id;
      const response = await GenerateResume(userId);
      setURLRESUME(userId);
      setRefreshKey((prevKey) => prevKey + 1);
    };
    callingBacendForResumecreation();
  }, []);
  const refreshHandler = async () => {
    const response = await GenerateResume(URLRESUME);
    console.log(response);
    setURLRESUME((prevURL) => prevURL);
    setRefreshKey((prevKey) => prevKey + 1);
  };
  return (
    <div className={Style.container_PDFPart}>
      <div className={Style.refresh}>
        <div className={Style.refreshText} onClick={refreshHandler}>
          <SvgRefresh />
          Refresh
        </div>
      </div>
      <iframe
        key={refreshKey}
        src={`http://localhost:8080/${URLRESUME}.pdf`}
        width="100%"
        height="500px"
        title="PDF Viewer"
      />
    </div>
  );
};

export default Pdf;
