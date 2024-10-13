import React from 'react';
import Card from './Card';
import CardWrapper from './CardWrapper';
const Carousel = ({cards}) => {
    return (
        <CardWrapper cards={cards} >
            <Card />
        </CardWrapper>
    );
};

export default Carousel;