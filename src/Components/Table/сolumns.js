const columns = [
    {
        Header: '№',
        accessor: (row, index) => index + 1,
        HeaderSpan: 1,
    },
    {
        Header: 'Имя сотрудника',
        columns: [
            {
                accessor: 'name',
            },
        ],
        HeaderSpan: 2,

    },
    {
        Header: 'Общая информация',
        columns: [
            {
                Header: 'ID номер',
                accessor: 'idNumber',
            },
            {
                Header: 'Телефон',
                accessor: 'phone',
            },
            {
                Header: 'Пол',
                accessor: 'gender',
            },
            {
                Header: 'Дата рождения',
                accessor: 'birthday',
            },
            {
                Header: 'Метро',
                accessor: 'metro',
            },
        ],
    },
    {
        Header: 'Банковская информация',
        columns: [
            {
                Header: 'Банк',
                accessor: 'bank',
            },
            {
                Header: 'Номер карты',
                accessor: 'numberCard',
            },
        ],
    },
    {
        Header: 'Документы сотрудника',
        columns: [
            {
                Header: 'Гражданство',
                accessor: 'citizenship',
            },
            {
                Header: 'Паспорт',
                accessor: 'passport',
            },
            {
                Header: 'Кем выдан',
                accessor: 'passGive',
            },
            {
                Header: 'Срок действия',
                accessor: 'datePass',
            },
            {
                Header: 'Место рождения',
                accessor: 'placeOfBrith',
            },
            {
                Header: 'Адрес прописки',
                accessor: 'residentialAdress',
            },
            {
                Header: 'Патент',
                accessor: 'patent',
            },
            {
                Header: 'СНИЛС',
                accessor: 'snils',
            },
            {
                Header: 'ИНН',
                accessor: 'inn',
            },
            {
                Header: 'Мед. книжка',
                accessor: 'Medica',
            },

        ],
    },
    {
        Header: 'Информация от HR',
        columns: [
            {
                Header: 'Должность',
                accessor: 'Position',
            },
            {
                Header: 'Подразделение',
                accessor: 'Department',
            },
            {
                Header: 'Решение',
                accessor: 'Decision',
            },
            {
                Header: 'Источник',
                accessor: 'Source',
            },
            {
                Header: 'Дата',
                accessor: 'Date',
            },
            {
                Header: 'Примечание',
                accessor: 'Note',
            },
        ],
    },
];
export default columns