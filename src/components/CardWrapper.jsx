import React from 'react';
import styles from './CardWrapper.module.css';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const CardWrapper = ({children,onPrevCard,onNextCard,currentIndex,cards}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonContainer}>
                <ArrowBack fontSize='large' className={styles.arrowButton} onClick={onPrevCard}>Previous</ArrowBack>
                {children}
                <ArrowForward fontSize='large' className={styles.arrowButton} onClick={onNextCard}>Next</ArrowForward>
            </div>
            <p className={styles.counter}>
                {currentIndex + 1} / {cards.length}
            </p>
        </div>
    );
};

export default CardWrapper;