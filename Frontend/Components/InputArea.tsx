import React from "react";
import Style from "../Styles/InputArea.module.css";
import { useDispatch } from "react-redux";
import { updateField } from "../Store/ResumeSlice";

interface InputAreaProps {
  value: string;
  id: string;
  page: string;
}

const InputArea: React.FC<InputAreaProps> = ({ value, id, page }) => {
  const dispatch = useDispatch();
  const updateUserResume = (value: string) => {
    var data = {
      item: value,
      id: id,
    };
    dispatch(
      updateField({
        field: page,
        data: data,
      })
    );
  };
  return (
    <div className={Style.container}>
      <div className={Style.input}>
        <input
          type="text"
          value={value}
          onChange={(e) => updateUserResume(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputArea;
