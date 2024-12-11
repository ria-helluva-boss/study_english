import React from 'react';

const ErrorNotification = ({ message }) => (
    <div style={{ color: 'red' }}>
        <p>{message}</p>
    </div>
);

export default ErrorNotification;