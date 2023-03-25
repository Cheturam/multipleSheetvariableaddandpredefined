import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import App from './../App';
import styles from "./Layout.module.css"

export default function Layout() {


    const location = useLocation()
   
    return (
        <div>
            <div className={styles["header"]}>
                <ul className={styles["header-nav"]}>
                    <li ><Link className={location.pathname === "/MultiSelections" ? styles["nav-active"] : styles["nav"]} to="/MultiSelections">MultiSelection</Link></li>
                    <li> <Link className={location.pathname === "/Predefined-Columns" ? styles["nav-active"] : styles["nav"]} to="/Predefined-Columns">Predefined Columns</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}
