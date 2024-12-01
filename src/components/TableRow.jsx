import Button from "./Button";
import styles from "./Button.module.css";
import React, { useEffect, useState } from 'react';
import looks from "./TableRow.module.css";
import Notification from "./Notification";
import useValidation from "./useValidation";
import useNotification from "./useNotification";
import { observer } from 'mobx-react-lite';
import { useStore } from '../WordStoreContext';

const TableRow = observer(({ rowData }) => {
    const { wordStore } = useStore();
    const { id, english, transcription, russian } = rowData;
    const [isSelected, setIsSelected] = useState(false);
    const [value, setValue] = useState({ ...rowData });

    const { validateField,
        inputErrorText,
        isInputError,
        isDisabled,
        setIsDisabled } = useValidation();

    const { notificationMessage,
        isVisible,
        showNotification } = useNotification();

    useEffect(() => {
        if (isInputError.english || isInputError.transcription || isInputError.russian) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [isInputError]);

    const handleEdit = () =>
        setIsSelected(prevValue => !prevValue);

    const handleClose = () => {
        setIsSelected(prevValue => !prevValue);
        setValue({ ...rowData })
    };

    const handleSaveWord = () => {
        wordStore.handleSave(value, value.id)
        setIsSelected(false);
    };

    const handleDeleteWord = () => {
        wordStore.handleDelete(id);
    };

    function handleChange(evt) {
        const name = evt.target.name;
        const newValue = evt.target.value;
        validateField(name, newValue);

        if (isInputError[name]) {
            showNotification(inputErrorText[name]);
        }

        setValue((prevValue) => {
            return { ...prevValue, [name]: newValue }
        });
    };
    return (
        <>
            {isVisible && (
                <Notification message={notificationMessage} onClose={() => showNotification('')} />
            )}
            {isSelected ? (
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
                        <Button text="Save" className={styles.save_button} onClick={handleSaveWord} disabled={isDisabled} />
                        <Button text="Close" className={styles.delete_button} onClick={handleClose} />
                    </td>

                </tr>) : (
                <tr className={looks.tableRow}>
                    <td>{value.english}</td>
                    <td>{value.transcription}</td>
                    <td>{value.russian}</td>
                    <td>
                        <Button text="Edit" className={styles.edit_button} onClick={handleEdit} />
                        <Button text="Delete" className={styles.delete_button} onClick={handleDeleteWord} />
                    </td>
                </tr>
            )}
        </>
    );
});

export default TableRow;