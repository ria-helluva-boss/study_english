import { useState } from 'react';

const useNotification = () => {
    const [notificationMessage, setNotificationMessage] = useState('');
    const [isVisible, setIsVisible] = useState (false);

    const showNotification = (message) => {
        setNotificationMessage(message);
        setIsVisible(true);

        setTimeout(() => {
            setNotificationMessage('');
            setIsVisible(false);
        }, 7000);
    };

    const closeMessage = () => {
        setNotificationMessage('');
        setIsVisible(false);
    };

    return {
        notificationMessage,
        isVisible,
        closeMessage,
        showNotification,
    };
};

export default useNotification;