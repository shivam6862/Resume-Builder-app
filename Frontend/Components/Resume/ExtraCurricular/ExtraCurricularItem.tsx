import React from "react";
import Style from "../../../Styles/Resume.module.css";
import classes from "../../../Styles/InputArea.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

const ExtraCurricularItem: React.FC = () => {
  const ExtraCurricularItemData = ["Position", "organisation", "Description"];
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        {ExtraCurricularItemData.map((item, index) => (
          <div className={Style.combine_Item} key={index}>
            <div className={Style.achievement}>
              {item}
              <div className={Style.compulsory}>*</div>
            </div>
            <div className={Style.input}>
              <InputArea />
            </div>
          </div>
        ))}
        <div
          style={{
            width: "-webkit-fill-available",
            display: "flex",
            gap: "2rem",
          }}
        >
          <div className={Style.combine_Item}>
            <div className={Style.achievement}>
              Start Date
              <div className={Style.compulsory}>*</div>
            </div>
            <div style={{ width: "-webkit-fill-available" }}>
              <div className={classes.container}>
                <div className={classes.input}>
                  <input type="date" />
                </div>
              </div>
            </div>
          </div>
          <div className={Style.combine_Item}>
            <div className={Style.achievement}>End Date</div>
            <div style={{ width: "-webkit-fill-available" }}>
              <div className={classes.container}>
                <div className={classes.input}>
                  <input type="date" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.submit}>
          <SaveButton />
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricularItem;
