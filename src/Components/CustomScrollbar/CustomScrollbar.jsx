import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';
import styles from './CustomScrollbar.css'

const CustomScrollbar = ({children}) => {
    // Настройки полосы прокрутки
    const options = {
        scrollbars: {

        },
    };

    return (
        <OverlayScrollbarsComponent className='my-custom-scrollbar' options={options}>
            {children}
        </OverlayScrollbarsComponent>
    );
};

export default CustomScrollbar