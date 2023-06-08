import React from 'react';
import TableFilter from "../Search/TableFilter";
import styles from './Contact.module.scss'

function Contact({data, onFilterChange}) {
    return (
        <div className={styles.contact}>
            <div className={styles.contact__container}>
                <span className={styles.contact__count}>{data.length}</span>
                <span className={styles.contact__text}>Контактов</span>
                <TableFilter onFilterChange={onFilterChange}/>
            </div>
            <button className={styles.contact__refactor}>Режим редактирования</button>
        </div>
    );
}

export default Contact;