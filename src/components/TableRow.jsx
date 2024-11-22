import Button from "./Button";
import styles from "./Button.module.css";
import React, { useEffect, useState } from 'react';
import looks from "./TableRow.module.css";
import Notification from "./Notification";
import useValidation from "./useValidation";
import useNotification from "./useNotification";

const TableRow = ({english, transcription, russian}) => {
    const {validateField,
        inputErrorText, 
        isInputError, 
        isDisabled, 
        setIsDisabled} = useValidation();

    const {notificationMessage,
        isVisible,
        showNotification} = useNotification ();

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
    setValue({english,transcription,russian})};

    const handleSave = () =>
    {setIsSelected(false);
    setValue({...value})};

    function handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        validateField(name,value);

        if(isInputError[name]) {
            showNotification(inputErrorText[name]);
        }

        setValue((prevValue) => {
            return {...prevValue, [name]: value}
    });
}
    return(
        <>
    {isVisible && (
        <Notification message={notificationMessage} onClose={() => showNotification('')} />
    )}
    {isSelected? (
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
                placeholder={inputErrorText.transcription && isInputError.transcription
                    && (inputErrorText.transcription)}
                />
                </td>

                <td> 
            <input
                type='text'
                value={value.russian}
                name='russian'
                onChange={handleChange}
                placeholder={inputErrorText.russian && isInputError.russian
                    && (inputErrorText.russian)}
                />
                </td>

            <td>
            <Button text="Save" className={styles.delete_button} onClick={handleSave} disabled={isDisabled} />
            <Button text="Close" className={styles.delete_button} onClick={handleClose} />
            </td>

        </tr>) : (
            <tr className={looks.tableRow}>
                <td>{value.english}</td>
                <td>{value.transcription}</td>
                <td>{value.russian}</td>
                <td>
                <Button text="Edit" className={styles.edit_button} onClick={handleEdit} />
                <Button text="Delete" className={styles.delete_button} />
                </td>
            </tr>
        )}
        </>
        );
        };

export default TableRow;