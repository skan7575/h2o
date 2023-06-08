import React, { useState } from 'react';
import styles from './TableFilter.module.scss'
const TableFilter = ({ onFilterChange }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchText(value);
        onFilterChange(value);
    };

    return (
        <div className={styles.filter}>
            <input className={styles.filter__input}
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Поиск"
            />
            <i className={styles.filter__inputIcon}></i>
        </div>
    );
};

export default TableFilter;