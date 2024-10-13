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
}

const buttonsSaveClose = [
    { text: "Save", className: styles.delete_button, onClick: handleSave },
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
            <Button {...button} />
            ))}
                </td>
            </tr>
        );};

export default TableRow;