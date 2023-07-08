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
            <InputArea value={title} id={id} page={"Publications"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Authors <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={authors} id={id} page={"Publications"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Publisher <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={publisher} id={id} page={"Publications"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Year <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={year} id={id} page={"Publications"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Pages <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={pages} id={id} page={"Publications"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Volumes <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={volumes} id={id} page={"Publications"} />
          </div>
        </div>
        <div className={Style.combine_Item}>
          <div className={Style.achievement}>
            Journal <div className={Style.compulsory}>*</div>
          </div>
          <div className={Style.input}>
            <InputArea value={journal} id={id} page={"Publications"} />
          </div>
        </div>
        <div className={Style.submit}>
          <SaveButton page={"Publications"} />
        </div>
      </div>
    </div>
  );
};

export default PublicationsItem;
