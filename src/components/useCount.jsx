import React, { useState, useEffect } from 'react';

const useCount = (showTranslation) => {
const [count, setCount] = useState(0);
useEffect(() => {
    showTranslation && setCount(prevCount => prevCount + 1);
}, [showTranslation]);
return {count};
};

export default useCount;