import React from 'react';
import styles from './CardWrapper.module.css';

const CardWrapper = ({children,onPrevCard,onNextCard,currentIndex,cards}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonContainer}>
                <button className={styles.arrowButton} onClick={onPrevCard}>Previous</button>
                {children}
                <button className={styles.arrowButton} onClick={onNextCard}>Next</button>
            </div>
            <p className={styles.counter}>
                {currentIndex + 1} / {cards.length}
            </p>
        </div>
    );
};

export default CardWrapper;