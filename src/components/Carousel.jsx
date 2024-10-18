import Card from './Card';
import CardWrapper from './CardWrapper';
import React, { useState } from 'react';
const Carousel = ({cards}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);

    const nextCard = () => {
        setCurrentIndex ((prevIndex)=>(prevIndex + 1) % cards.length);
        setShowTranslation(false)
    };
    
const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length); 
        setShowTranslation(false)
    };
    return (
        <CardWrapper cards={cards}
        onPrevCard={prevCard}
        onNextCard={nextCard}
        currentIndex={currentIndex}>
        <Card card = {cards[currentIndex]} showTranslation={showTranslation} setShowTranslation={setShowTranslation} />
        </CardWrapper>
    );
};

export default Carousel;