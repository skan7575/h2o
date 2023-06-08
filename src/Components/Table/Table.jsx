import React, {useEffect, useState} from 'react';
import {useTable, useGroupBy, usePagination, useFilters} from 'react-table';
import styles from './Table.module.scss';
import Contact from "../Contact/Contact";
import CustomScrollbar from "../CustomScrollbar/CustomScrollbar";

const Table = ({data, columns, pageSizeOptions}) => {
    const [editValues, setEditValues] = useState({});
    const [selectedValue, setSelectedValue] = useState(pageSizeOptions[0]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setPageSize(selectedValue);
        gotoPage(0);
    }, [selectedValue]);

    const {
        setPageSize,
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        setFilter,
        previousPage,
        state: {pageIndex},
    } = useTable(
        {
            columns,
            data,
            initialState: {pageIndex: 0},
        },
        useFilters,
        useGroupBy,
        usePagination
    );

    const handlePageSizeChange = (event) => {
        const selectedPageSize = Number(event.target.value);
        setSelectedValue(selectedPageSize);
        setPageSize(selectedPageSize);
        gotoPage(0);
    };
    const handleFilterChange = (value) => {
        setSearchText(value);
        setFilter('name', value)
    };

    return (
        <>
            <h2>Общая база сотрудников</h2>
            <Contact data={data} onFilterChange={handleFilterChange}/>
            <div className={styles.wrapper}>
                <CustomScrollbar >
                <table className={styles.table} {...getTableProps()}>
                    <CustomScrollbar >
                    <thead className={styles.table__thead}>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                            {headerGroup.headers.map((column, columnIndex) => (
                                <th
                                    className={`${styles.table__td} ${
                                        columnIndex < 1 ? styles.fixed_column : ''
                                    } ${
                                        columnIndex === 1 ? styles.fixed_column_two : ''
                                    }`}
                                    {...column.getHeaderProps()}
                                    key={column.id}
                                    style={
                                        columnIndex < 2
                                            ? {position: 'sticky', zIndex: 1, background: '#fff'}
                                            : null
                                    }
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr className={styles.table__tr} {...row.getRowProps()} key={row.id}>
                                {row.cells.map((cell, cellIndex) => (
                                    <td
                                        className={`${styles.table__td} ${
                                            cellIndex < 1 ? styles.fixed_column : ''
                                        } ${
                                            cellIndex === 1 ? styles.fixed_column_two : ''
                                        }`}
                                        {...cell.getCellProps()}
                                        key={cell.column.id}
                                        style={
                                            cellIndex < 2
                                                ? {position: 'sticky', zIndex: 1, background: '#fff'}
                                                : null
                                        }
                                        onClick={() => {
                                            const columnId = cell.column.id;
                                            const rowId = row.id;
                                            const newValue = cell.value || '';

                                            setEditValues((prevState) => ({
                                                ...prevState,
                                                [rowId]: {
                                                    ...prevState[rowId],
                                                    [columnId]: {
                                                        value: newValue,
                                                        isEditing: true,
                                                    },
                                                },
                                            }));
                                        }}
                                    >
                                        {editValues[row.id] &&
                                        editValues[row.id][cell.column.id] &&
                                        editValues[row.id][cell.column.id].isEditing ? (
                                            <input
                                                autoFocus={true}
                                                type="text"
                                                value={editValues[row.id][cell.column.id].value}
                                                onChange={(e) => {
                                                    const {value} = e.target;
                                                    const rowId = row.id;
                                                    const columnId = cell.column.id;

                                                    setEditValues((prevState) => ({
                                                        ...prevState,
                                                        [rowId]: {
                                                            ...prevState[rowId],
                                                            [columnId]: {
                                                                ...prevState[rowId][columnId],
                                                                value: value,
                                                            },
                                                        },
                                                    }));
                                                }}
                                                onBlur={(e) => {
                                                    const rowId = row.id;
                                                    const columnId = cell.column.id;
                                                    const editedValue = editValues[rowId][columnId].value;

                                                    // Здесь логика для сохранения изменений
                                                    console.log('Сохранено значение:', editedValue);

                                                    setEditValues((prevState) => ({
                                                        ...prevState,
                                                        [rowId]: {
                                                            ...prevState[rowId],
                                                            [columnId]: {
                                                                value: editedValue,
                                                                isEditing: false,
                                                            },
                                                        },
                                                    }));
                                                }}
                                            />
                                        ) : (
                                            cell.render('Cell')
                                        )}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                    </tbody>
                    </CustomScrollbar>
                </table>
            </CustomScrollbar>

                <div className={styles.pagination}>
        <span className={styles.table__text}>
          {`Показано элементов:
          ${page.length > 0 ? pageIndex * page.length + 1 : 0} -
           ${pageIndex * page.length + page.length > data.length
              ? data.length
              : pageIndex * page.length + page.length}
           из ${data.length}`}
        </span>
                    <div className={styles.pagination__container}>
                        <button
                            className={`${styles.table__arrow} ${styles.table__arrow_left}`}
                            onClick={() => previousPage()}
                            disabled={!canPreviousPage}
                        ></button>
                        <div className={styles.table__pages}>
                            {pageOptions.map((page, index) => (
                                <button
                                    className={
                                        pageIndex === index
                                            ? `${styles.table__pageButton} ${styles.table__pageButton_active}`
                                            : `${styles.table__pageButton}`
                                    }
                                    key={index}
                                    onClick={() => gotoPage(index)}
                                    style={{
                                        fontWeight: pageIndex === index ? 'bold' : 'normal',
                                    }}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            className={styles.table__arrow}
                            onClick={() => nextPage()}
                            disabled={!canNextPage}
                        ></button>
                    </div>
                    <div className={styles.table__list}>
                        <span className={styles.table__listText}>отображать на странице:</span>
                        <select className={styles.table__select} onChange={handlePageSizeChange}>
                            {pageSizeOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Table;
