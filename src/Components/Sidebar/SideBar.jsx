import React from 'react';
import logo from '../../img/logo.svg'
import styles from './SideBar.module.scss'
import {NavLink} from "react-router-dom";
import nav1 from '../../img/H3-1.svg'
import nav2 from '../../img/H3-5.svg'
import nav3 from '../../img/H3-6.svg'
import nav4 from '../../img/H3-2.svg'
import nav5 from '../../img/H3-3.svg'
import nav6 from '../../img/H3-4.svg'
function SideBar(props) {
    return (
        <header className={styles.sidebar}>
            <NavLink to={'/'}>
                <img src={logo} alt="Логотип"/>
            </NavLink>
            <nav className={styles.sidebar__nav}>
                <NavLink className={styles.sidebar__navItem} to={'/'}>
                    <img src={nav1} alt="страница такая то"/>
                </NavLink>
                <NavLink className={styles.sidebar__navItem}  to={'/'}>
                    <img src={nav2} alt="страница такая то"/>
                </NavLink>
                <NavLink className={styles.sidebar__navItem}  to={'/'}>
                    <img src={nav3} alt="страница такая то"/>
                </NavLink>
                <NavLink className={styles.sidebar__navItem}  to={'/'}>
                    <img src={nav4} alt="страница такая то"/>
                </NavLink>
                <NavLink className={styles.sidebar__navItem}  to={'/'}>
                    <img src={nav5} alt="страница такая то"/>
                </NavLink>
                <NavLink className={styles.sidebar__navItem}  to={'/'}>
                    <img src={nav6} alt="страница такая то"/>
                </NavLink>

            </nav>
        </header>
    );
}

export default SideBar;