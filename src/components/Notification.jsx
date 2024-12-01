import React from "react";
import styles from "./Notification.module.css";

const Notification = ({ message, onClose }) => {
    return (
        <div className={styles.notification}>
            <span>{message}</span>
            <button onClick={onClose} />
        </div>
    );
};

export default Notification;