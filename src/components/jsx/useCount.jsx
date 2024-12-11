import { useState, useEffect } from 'react';

const useCount = (learnedCards) => {
const [count, setCount] = useState(learnedCards.size);
useEffect(() => {
    setCount(learnedCards.size); 
}, [learnedCards]); 
return { count };
};

export default useCount;