import Button from "./Button";
import styles from "./Button.module.css";
import React, { useState } from 'react';
import looks from "./TableRow.module.css";

const TableRow = ({english, transcription, russian}) => {

    const [isSelected, setIsSelected] = useState(false);

    const [value, setValue] = useState({
        english,
        transcription,
        russian,
        });

    const [errors, setErrors] = useState({
        english:false,
        transcription:false,
        russian:false,
        });

    const handleEdit = () => setIsSelected(prevValue => !prevValue);
    
    const handleClose = () => 
    {setIsSelected(prevValue => !prevValue);
    setValue({...value})};

    const handleSave = () =>
    {setIsSelected(prevValue => !prevValue);
    setValue({...value})};

    function handleChange(evt) {
        setValue((prevValue) => {
            return {...prevValue, [evt.target.name]: evt.target.value}
    });
    setErrors({...errors,
            [evt.target.name]:
            evt.target.value.trim()===''?'Поле должно быть заполнено' : false});
}

const isButtonDisabled = Object.values(errors).some((element) => element);

const buttonsSaveClose = [
    { text: "Save", className: styles.delete_button, onClick: handleSave, disabled: isButtonDisabled },
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
                placeholder={errors.english && errors.english}
                />
                </td>

                <td> 
            <input
                type='text'
                value={value.transcription}
                name='transcription'
                onChange={handleChange}
                placeholder={errors.transcription && errors.transcription}
                />
                </td>

                <td> 
            <input
                type='text'
                value={value.russian}
                name='russian'
                onChange={handleChange}
                placeholder={errors.russian && errors.russian}
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