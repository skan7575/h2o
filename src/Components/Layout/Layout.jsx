import React from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
// Импортируем компонент Sidebar
import styles from './Layout.module.scss';
import SideBar from "../Sidebar/SideBar";

function Layout(props) {
    return (
        <>
            <div className={styles.container}>
                <SideBar/>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
