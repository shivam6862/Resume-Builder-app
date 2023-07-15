import React from "react";
import Style from "../../../Styles/Resume.module.css";
import classes from "../../../Styles/InputArea.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

interface ExtraCurricularItemProps {
  name: string;
  under: string;
  description: string;
  startDate: string;
  endDate: string;
  id: string;
}

const ExtraCurricularItem: React.FC<ExtraCurricularItemProps> = ({
  name,
  under,
  description,
  startDate,
  endDate,
  id,
}) => {
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Position
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={name}
              id={id}
              page={"poraec"}
              where={"name"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            organisation
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={under}
              id={id}
              page={"poraec"}
              where={"under"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Description
            <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={description}
              id={id}
              page={"poraec"}
              where={"description"}
            />
          </div>
        </div>
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
                  {/* <input type="date" value={time} /> */}
                  <InputArea
                    type="date"
                    value={startDate}
                    id={id}
                    page={"poraec"}
                    where={"startDate"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={Style.combine_Item}>
            <div className={Style.achievement}>End Date</div>
            <div style={{ width: "-webkit-fill-available" }}>
              <div className={classes.container}>
                <div className={classes.input}>
                  <InputArea
                    type="date"
                    value={endDate}
                    id={id}
                    page={"poraec"}
                    where={"endDate"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.submit}>
          <SaveButton page={"Extra curricular"} findIn={"poraec"} id={id} />
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricularItem;
