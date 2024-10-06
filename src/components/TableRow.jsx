import Button from "./Button";
import styles from "./Button.module.css";
import React, { useState } from 'react';
import looks from "./TableRow.module.css";

const TableRow = ({english, transcription, russian}) => {

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
                <Button className={styles.edit_button} onClick={handleEditClick}>
                    Edit
                </Button>
                <Button className={styles.delete_button} onClick={handleSaveClick}>
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default TableRow;