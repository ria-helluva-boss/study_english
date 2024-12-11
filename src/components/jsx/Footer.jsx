import React from 'react';
import styles from '../modules_css/Footer.module.css';
const Footer = () => {
    return (
        <div className={styles.container}>
        <ul className={styles.container__box}>
            <li className={styles.container__item1}>Политика конфеденциальности</li>
            <li className={styles.container__item2}>Ⓒ2024 Все права защищены, HELLO ENGLISH</li>
            <li className={styles.container__item3}>hello_english2024@gmail.com</li>
        </ul>
        </div>
    );
};

export default Footer;