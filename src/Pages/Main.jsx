import React, {useEffect, useState} from 'react';
import Table from "../Components/Table/Table";
import columns from "../Components/Table/сolumns";
import axios from 'axios';
import Search from "../Components/Search/TableFilter";
import ColumnFilter from "../Components/Search/TableFilter";

function Main(props) {
    useEffect(() => {
        fetchData();
    }, []);

    const [tableData, setTableData] = useState([]);
    const pageSizeOptions = [10, 25, 50];

    const fetchData = async () => {
        try {
            const response = await axios.get('https://6479a8bba455e257fa6381f3.mockapi.io/users');
            const data = response.data.map(item => {
                return {
                    ...item,
                    birthday: item.birthday.split('T')[0] // Оставляем только дату без времени
                };
            });
            setTableData(data);
        } catch (error) {
            console.error('Ошибка при получении данных из API:', error);
        }
    };

    return (
            <Table data={tableData} pageSizeOptions={pageSizeOptions} columns={columns}/>
    );
}

export default Main;