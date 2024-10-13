    import React, { useState } from 'react';
    import styles from './Card.module.css';

    const Card = ({ card }) => {
    const { english, transcription, russian } = card;
    const [showTranslation, setShowTranslation] = useState(false);

    const handleShowTranslation = () => {
        setShowTranslation(true);
    };

    return (
        <div className={styles.card}>
        <h2 className={styles.englishWord}>{english}</h2>
        <p className={styles.transcription}>{transcription}</p>
        {showTranslation ? (
            <p className={styles.russianWord}>{russian}</p>
        ) : (
            <button className={styles.showTranslationButton} onClick={handleShowTranslation}>
            Проверить
            </button>
        )}
        </div>
    );
    };

    export default Card;