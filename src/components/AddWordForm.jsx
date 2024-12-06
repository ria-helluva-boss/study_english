import React, { useState, useEffect } from 'react';
import Button from "./Button";
import {observer} from 'mobx-react-lite';
import {useStore} from '../WordStoreContext';
import styles from './AddWordForm.module.css';
import useValidation from './useValidation'; 

const AddWordForm = observer (() => {
    
    const { wordStore } = useStore();

    const [newWord, setNewWord] = useState(
        { id: '',
        english: '', 
        transcription: '', 
        russian: '' 
        });

    const {validateField,
        inputErrorText,
        isInputError,
        isDisabled,
        setIsDisabled } = useValidation();
    
        useEffect(() => {
            if (isInputError.english || isInputError.transcription || isInputError.russian) {
                setIsDisabled(true);
            } else {
                setIsDisabled(false);
            }
        }, [isInputError]);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setNewWord({ ...newWord, [name]: value });
        validateField(name, value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!isDisabled) {
            wordStore.handleAdd(newWord);
            setNewWord({ english: '', transcription: '', russian: '' }); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.addWordForm}>
            <div className={styles.addWordForm__div}>
                <input className={styles.addWordForm__input}
                    type="text" 
                    name="english" 
                    value={newWord.english} 
                    onChange={handleChange} 
                    placeholder="Слово" 
                    required />
                {isInputError.english && (
                    <div className={styles.addWordForm__error}>{inputErrorText.english}</div>
                )}
            </div>

            <div className={styles.addWordForm__div}>
                <input className={styles.addWordForm__input}
                    type="text"
                    name="transcription"
                    value={newWord.transcription}
                    onChange={handleChange}
                    placeholder="Транскрипция"
                    required />
                {isInputError.transcription && (
                    <div className={styles.addWordForm__error}>{inputErrorText.transcription}</div>
                )}
            </div>

            <div className={styles.addWordForm__div}>
                <input className={styles.addWordForm__input}
                    type="text"
                    name="russian"
                    value={newWord.russian}
                    onChange={handleChange}
                    placeholder="Перевод"
                    required />
                {isInputError.russian && (
                    <div className={styles.addWordForm__error}>{inputErrorText.russian}</div>
                )}
            </div>

            <Button className={styles.add_button} type="submit" text="Add Word" disabled={isDisabled} />
        </form>
    );
});

export default AddWordForm;