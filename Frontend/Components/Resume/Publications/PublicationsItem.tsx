import React from "react";
import Style from "../../../Styles/Resume.module.css";
import InputArea from "../../InputArea";
import SaveButton from "../../SaveButton";

interface JobExperiencesProps {
  authors: string;
  journal: string;
  pages: string;
  publisher: string;
  title: string;
  volumes: string;
  year: string;
  id: string;
}

const PublicationsItem: React.FC<JobExperiencesProps> = ({
  authors,
  journal,
  pages,
  publisher,
  title,
  volumes,
  year,
  id,
}) => {
  return (
    <div className={Style.container_item}>
      <div className={Style.box_item}>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Title <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={title}
              id={id}
              page={"Publications"}
              where={"Title"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Authors <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={authors}
              id={id}
              page={"Publications"}
              where={"Authors"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Publisher <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={publisher}
              id={id}
              page={"Publications"}
              where={"Publisher"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Year <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={year}
              id={id}
              page={"Publications"}
              where={"Year"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Pages <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={pages}
              id={id}
              page={"Publications"}
              where={"Pages"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Volumes <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={volumes}
              id={id}
              page={"Publications"}
              where={"Volumes"}
            />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Journal <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea
              type="text"
              value={journal}
              id={id}
              page={"Publications"}
              where={"Journal"}
            />
          </div>
        </div>
        <div className={Style.submit}>
          <SaveButton page={"Publications"} findIn={"Publications"} id={id} />
        </div>
      </div>
    </div>
  );
};

export default PublicationsItem;
