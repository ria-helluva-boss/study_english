import Button from "./Button";
import styles from "./Button.module.css";
import React, { useEffect, useState } from 'react';
import looks from "./TableRow.module.css";
import useValidation from "./useValidation";

const TableRow = ({english, transcription, russian}) => {
    const {validateField,
        inputErrorText, 
        isInputError, 
        isDisabled, 
        setIsDisabled} = useValidation();

useEffect(() => {
    if(isInputError.english || isInputError.transcription || isInputError.russian){
        setIsDisabled(true);
    }else{
        setIsDisabled(false);
    }
}, [isInputError]);

    const [isSelected, setIsSelected] = useState(false);

    const [value, setValue] = useState({
        english,
        transcription,
        russian,
        });

    const handleEdit = () => setIsSelected(prevValue => !prevValue);
    
    const handleClose = () => 
    {setIsSelected(prevValue => !prevValue);
    setValue({...value})};

    const handleSave = () =>
    {setIsSelected(prevValue => !prevValue);
    setValue({...value})};

    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        validateField(name,value);
        setValue((prevValue) => {
            return {...prevValue, [name]: value}
    });
}

const buttonsSaveClose = [
    { text: "Save", className: styles.delete_button, onClick: handleSave, disabled: isDisabled },
    { text: "Close", className: styles.delete_button, onClick: handleClose },
];
const buttonsEditDelete = [
    { text: "Edit", className: styles.edit_button, onClick: handleEdit },
    { text: "Delete", className: styles.delete_button },
];

    return isSelected? (
        <tr className={looks.tableRow}>
            <td> 
            <input
                type='text'
                value={value.english}
                name='english'
                onChange={handleChange}
                placeholder={inputErrorText.english && isInputError.english
                            && (inputErrorText.english)}
                />
                </td>

                <td> 
            <input
                type='text'
                value={value.transcription}
                name='transcription'
                onChange={handleChange}
                />
                </td>

                <td> 
            <input
                type='text'
                value={value.russian}
                name='russian'
                onChange={handleChange}
                />
                </td>

            <td>
            {buttonsSaveClose.map((button) => (
            <Button {...button} />
            ))}
            </td>
        </tr>) : (
            <tr className={looks.tableRow}>
                <td>{value.english}</td>
                <td>{value.transcription}</td>
                <td>{value.russian}</td>
                <td>
                {buttonsEditDelete.map((button) => (
            <Button {...button} disabled={button.disabled} key={button.text} />
            ))}
                </td>
            </tr>
        );};

export default TableRow;