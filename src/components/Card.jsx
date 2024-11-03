import React, { useRef, useEffect, useState } from 'react';
import styles from './Card.module.css';
import Button from "./Button";
import useCount from './useCount';

const Card = ({ card, setShowTranslation, showTranslation }) => {
const { english, transcription, russian } = card;
const focusButton = useRef (null);
const {count} = useCount(showTranslation);

const handleShowTranslation = () => {
    setShowTranslation(true);
};

useEffect (() => {
    focusButton.current && focusButton.current.focus();
},[card]);

return (
    <div className={styles.card}>
    <h2 className={styles.englishWord}>{english}</h2>
    <p className={styles.transcription}>{transcription}</p>
    {showTranslation ? (
        <p className={styles.russianWord}>{russian}</p>
    ) : (
        <Button text ={'ПРОВЕРИТЬ'}
        className={styles.showTranslationButton}
        onClick={handleShowTranslation} 
        ref={focusButton}/>
    )}
    <p>Всего изучено слов: {count}</p>
    </div>
);
};

export default Card;