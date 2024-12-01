import Card from './Card';
import CardWrapper from './CardWrapper';
import React, { useState, useContext } from 'react';
import useCount from './useCount'; 
import { useStore } from '../WordStoreContext';
import { observer } from 'mobx-react-lite';
import LoadingIndicator from './LoadingIndicator';

const Carousel = observer(() => { 
    const { wordStore } = useStore();
    const { words, isLoaded } = wordStore;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);
    const [learnedCards, setLearnedCards] = useState(new Set());

    const nextCard = () => {
        setCurrentIndex ((prevIndex)=>(prevIndex + 1) % words.length);
        setShowTranslation(false)
    };   

const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length); 
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
    isLoaded ? (
        <LoadingIndicator /> 
    ) : (
        <CardWrapper cards={words}
            onPrevCard={prevCard}
            onNextCard={nextCard}
            currentIndex={currentIndex}
        >
            {words.length > 0 && (
                <Card
                    card={words[currentIndex]}
                    showTranslation={showTranslation || isLearned}
                    setShowTranslation={setShowTranslation}
                    markAsLearned={markAsLearned}
                    isLearned={isLearned} 
                    learnedCount={learnedCount} 
                />
            )}
        </CardWrapper>  
));
});

export default Carousel;