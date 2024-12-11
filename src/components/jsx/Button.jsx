import React from 'react';
const Button = React.forwardRef(({ text, className, index, disabled, onClick}, ref) => {
    return (
        <button className={className} key={index} disabled={disabled}
        onClick={onClick} ref={ref}> {text} </button>
    );
});
export default Button;
