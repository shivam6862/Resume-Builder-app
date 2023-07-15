import React, { useState, ChangeEvent } from "react";
import SvgSave from "../Public/SvgSave";
import classes from "../Styles/UploadImage.module.css";
import { useLocationLocalStorage } from "../Hook/LocationLocalStorage";

const UploadImage: React.FC = () => {
  const { fetchPersonalDetails } = useLocationLocalStorage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [setImageToBackend, setsetImageToBackend] = useState<
    File | undefined
  >();

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    setsetImageToBackend(file);
    if (file) {
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveImage = async (): Promise<any> => {
    if (selectedImage == null) return;
    console.log(setImageToBackend);
    const userId = fetchPersonalDetails().id;
    const formData = new FormData();
    if (setImageToBackend) {
      formData.append("file", setImageToBackend);
    }
    try {
      const response = await fetch(
        `http://localhost:8080/userimage/${userId}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const responsedata = await response.json();
      console.log(responsedata);
      return responsedata.response;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.file_input_wrapper}>
      <input
        type="file"
        id="userimage"
        name="userimage"
        className={classes.file_input}
        onChange={handleFileUpload}
      />
      <div className={classes.part1_b_a}>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Uploaded Image"
            style={{ maxWidth: "65px", maxHeight: "65px" }}
          />
        )}
      </div>
      <label htmlFor="userimage" className={classes.file_input_label}>
        Choose a file
      </label>
      <div
        className={classes.svgsave}
        onClick={() => {
          saveImage();
        }}
      >
        <SvgSave />
      </div>
    </div>
  );
};

export default UploadImage;
