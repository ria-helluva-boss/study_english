import Card from './Card';
import CardWrapper from './CardWrapper';
import React, { useState } from 'react';
import useCount from './useCount'; 
const Carousel = ({cards}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);
    const [learnedCards, setLearnedCards] = useState(new Set());

    const nextCard = () => {
        setCurrentIndex ((prevIndex)=>(prevIndex + 1) % cards.length);
        setShowTranslation(false)
    };   

const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length); 
        setShowTranslation(false)
    };

const markAsLearned = () => {
    if (!learnedCards.has(currentIndex)){
        setLearnedCards(new Set(learnedCards).add(currentIndex));
    }
};

const isLearned = learnedCards.has(currentIndex);
const { count: learnedCount } = useCount(learnedCards);

    return (
        <CardWrapper cards={cards}
        onPrevCard={prevCard}
        onNextCard={nextCard}
        currentIndex={currentIndex}>

        <Card card={cards[currentIndex]}
        showTranslation={showTranslation || isLearned}
        setShowTranslation={setShowTranslation} 
        markAsLearned={markAsLearned}
        isLearned={isLearned} 
        learnedCount={learnedCount}/>
        </CardWrapper>
    );
};

export default Carousel;