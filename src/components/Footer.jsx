import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <ul className={styles.container}>
            <li className={styles.container_item}>Политика конфеденциальности</li>
            <li className={styles.container_item}>Ⓒ2024 Все права защищены, HELLO ENGLISH</li>
            <li className={styles.container_item}>hello_english2024@gmail.com</li>
        </ul>
    );
};

export default Footer;