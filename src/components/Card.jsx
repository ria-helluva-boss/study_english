import React, { useRef, useEffect} from 'react';
import styles from './Card.module.css';
import Button from "./Button";
import useCount from './useCount';

const Card = ({ card, setShowTranslation, showTranslation, markAsLearned, isLearned, learnedCount }) => {
const { english, transcription, russian } = card;
const focusButton = useRef (null);
const {count} = useCount(showTranslation);

const handleShowTranslation = () => {
    if (!isLearned) { 
        setShowTranslation(true);
        markAsLearned(); 
    }
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
        ref={focusButton}
        disabled={isLearned}/>
    )}
    <p>Всего изучено слов: {learnedCount}</p>
    </div>
);
};

export default Card;