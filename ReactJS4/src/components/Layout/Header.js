import React, { Fragment } from "react";

import headerImg from '../../asseets/meals.jpg';
import styles from './Header.module.css';

const Header = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Meals</h1>
                <button>Cart</button>
            </header>
            <div className={styles['main-image']}>
                <img src={headerImg} alt="Header Meals" />
            </div>
        </Fragment>
    );
};

export default Header;