import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.jpg'; 
const Logo = () => {
return (
    <Link to='/'>
        <img src={logoImage} alt='Логотип' style={{width:'3.75rem', borderRadius: '8px'}}/>
    </Link>
    );
};

export default Logo;
