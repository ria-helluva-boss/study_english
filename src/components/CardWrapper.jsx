import React, { useState } from 'react';
import styles from './CardWrapper.module.css';

const CardWrapper = ({children,cards}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex ((prevIndex)=>(prevIndex+1) % cards.length);
    };//я вообще по-другому сначала делала через if но потом нашла в интернетах эту имбу с оператором % this is so smart, bro

    const prevCard = () => {
        setCurrentIndex ((prevIndex)=> (prevIndex-1) % cards.length);
    };
    return (
        <div>
        <button onClick={nextCard}>Next</button>
        {React.cloneElement(children, { card: cards[currentIndex] })} 
        <button onClick={prevCard}>Previous</button>
        <div>
            {currentIndex} / {cards.length}
        </div>
        </div>
    );
};

export default CardWrapper;
