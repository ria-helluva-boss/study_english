import Button from "./Button";
import styles from "./Button.module.css";
import React, { useState } from 'react';
import looks from "./TableRow.module.css";

const TableRow = ({english, transcription, russian}) => {
    const buttons = [
        { text: "Edit", className: styles.edit_button },
        { text: "Delete", className: styles.delete_button },
    ];

    const [isSelected, setSelected] = useState(false);

    const [englishValue, setEnglishValue] = useState(english);
    const [transcriptionValue, setTranscriptionValue] = useState(transcription);
    const [russianValue, setRussianValue] = useState(russian);

    const handleInputChange = (setValue) => (evt) => {
        setValue(evt.target.value);
    };
    const handleEditClick = () => {
        setSelected(true);
    };
    const handleSaveClick = () => {
        setSelected(false);
    };

    return (
        <tr className={looks.tableRow}>
            <td>{isSelected ? (
            <input value={englishValue}
                onChange={handleInputChange(setEnglishValue)}
                />) : englishValue}</td>

            <td>{isSelected ? (
            <input value={transcriptionValue}
                onChange={handleInputChange(setTranscriptionValue)}
                />) : transcriptionValue}</td>

            <td> {isSelected ? (
            <input value={russianValue}
                onChange={handleInputChange(setRussianValue)}
                />) : russianValue}</td>

            <td>
            {buttons.map((button, index) => (
                <Button key={index} 
                        className={button.className} 
                        text={button.text}
                        onClick={button.text === "Edit" ? handleEditClick : handleSaveClick}
                        />
                ))}
            </td>
        </tr>
    );
};

export default TableRow;