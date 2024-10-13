import React from 'react';
const Button = ({ text, className, index, onClick}) => {
    return (
        <button className={className} key={index} onClick={onClick}>{text}</button>
    )
}
export default Button;
