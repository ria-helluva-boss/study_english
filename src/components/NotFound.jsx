import React from 'react';
import notFound from '../images/notFound.jpg'; 
import { Link } from 'react-router-dom';
const NotFound = () => {
    return(
        <Link to='*'>
            <img src={notFound} alt='Мем с Котом' style={{width: '31.25rem'}}/>
        </Link>
    );
};

export default NotFound;