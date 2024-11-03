import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
    return(
        <div className={styles.container}>
            <p className={styles.container_item}>Политика конфеденциальности</p>
            <p className={styles.container_item}>Ⓒ2024 Все права защищены, HELLO ENGLISH</p>
            <p className={styles.container_item}>hello_english2024@gmail.com</p>
        </div>
    );
};

export default Footer;