import React from "react";
import {Link} from "react-router-dom"
import styles from "./Header.module.scss"

export const Header: React.FC = ()=>{
    //let str: string = "VashAvto";
    return(
        <header>
            <Link to="/">VashAvto</Link>
            <div className={styles.navigation}>
                <Link to="/about">Про нас</Link>
                <Link to="/support">Підтримка</Link>
                <Link to="/contacts">Контакти</Link>
                <Link to="/login" className={`btn btnSm ${styles.btnLink}`}>Увійти</Link>
                <Link to="/register" className="btn btnSm">Реєстрація</Link>
            </div>
            <div className={styles.languages}>
                <a href="#">En</a>
                <a href="#">Ua</a>
            </div>
        </header>
        
    );
}
