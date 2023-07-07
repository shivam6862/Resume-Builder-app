import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import Notification from "./Notification";
import Styles from "../../Styles/Notification.module.css";

const Notifications: React.FC = () => {
  const typeMessage = useSelector(
    (state: RootState) => state.notification.typeMessage
  );
  return (
    <div className={`${Styles.container} ${Styles.buttomright_1}`}>
      {typeMessage.map((message, index) => (
        <Notification
          key={message.id}
          message={message.message}
          id={message.id}
          type={message.type}
        />
      ))}
    </div>
  );
};

export default Notifications;
