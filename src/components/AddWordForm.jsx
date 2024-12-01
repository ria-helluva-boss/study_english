import React, { useState } from 'react';
import Button from "./Button";
import {observer} from 'mobx-react-lite';
import {useStore} from '../WordStoreContext';

const AddWordForm = observer (() => {
    
    const { wordStore } = useStore();

    const [newWord, setNewWord] = useState(
        { id: '',
         english: '', 
         transcription: '', 
         russian: '' 
        });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setNewWord({ ...newWord, [name]: value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        wordStore.handleAdd(newWord); 
        setNewWord({ english: '', transcription: '', russian: '' }); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="english" 
            value={newWord.english} 
            onChange={handleChange} 
            placeholder="English" 
            required />

            <input type="text" 
            name="transcription" 
            value={newWord.transcription} 
            onChange={handleChange} 
            placeholder="Transcription" 
            required />

            <input type="text" 
            name="russian" 
            value={newWord.russian} 
            onChange={handleChange} 
            placeholder="Russian" 
            required />

            <Button type="submit" text="Добавить слово" />
        </form>
    );
});

export default AddWordForm;