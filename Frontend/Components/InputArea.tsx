import React from "react";
import Style from "../Styles/InputArea.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../Store/ResumeSlice";

interface InputAreaProps {
  value: string;
  id: string;
  page: string;
  where: string;
  type: string;
}

const InputArea: React.FC<InputAreaProps> = ({
  value,
  id,
  page,
  where,
  type,
}) => {
  const dispatch = useDispatch();
  var data = useSelector((state: any) => state.userResume[page]);
  const updateUserResume = (value: string) => {
    var sendData;
    var updatedSendData;
    if (Array.isArray(data)) {
      sendData = data.find((item: any) => item.id == id);
      updatedSendData = { ...sendData, [where]: value };
    } else {
      updatedSendData = { ...data, [where]: value };
    }
    dispatch(
      updateField({
        field: page,
        data: updatedSendData,
      })
    );
  };
  return (
    <div className={Style.container}>
      <div className={Style.input}>
        <input
          type={type}
          value={value}
          onChange={(e) => updateUserResume(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputArea;
