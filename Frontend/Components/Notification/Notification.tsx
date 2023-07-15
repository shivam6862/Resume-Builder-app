import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../Store/notificationSlice";
import SvgCross from "../../Public/SvgCross";
import Styles from "../../Styles/Notification.module.css";

interface Notification {
  message: string;
  id: string;
  type: string;
}

const Notification: React.FC<Notification> = ({ message, id, type }) => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleDeleteNotification = (id: string) => {
    dispatch(deleteMessage(id));
  };

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }
        clearInterval(id);
        return prev;
      });
    }, 20);
    setIntervalId(id);
  };

  const handlePauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  useEffect(() => {
    if (width === 100) {
      handlePauseTimer();
      setTimeout(() => {
        dispatch(deleteMessage(id));
      }, 300);
    }
  }, [width]);
  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      key={id}
      className={`${Styles.notification} ${Styles.buttomright}`}
      style={{ backgroundColor: type }}
    >
      <div
        className={Styles.button}
        onClick={() => handleDeleteNotification(id)}
      >
        <SvgCross />
      </div>
      <div>
        <p className={Styles.title}>{message}</p>
      </div>
      <div
        className={`${Styles.lowerboder}`}
        style={{ width: width + "%" }}
      ></div>
    </div>
  );
};

export default Notification;
