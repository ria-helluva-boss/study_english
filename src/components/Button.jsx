import React from 'react';
const Button = React.forwardRef(({ text, className, index, onClick}, ref) => {
    return (
        <button className={className} key={index}
        onClick={onClick} ref={ref}> {text} </button>
    );
});
export default Button;
