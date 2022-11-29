import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const [btnIsBump, setBtnIsBump] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const countCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnStyles = `${styles.button} ${btnIsBump ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length > 0) {
            setBtnIsBump(true);
        }

        const cartTimer = setTimeout(() => {
            setBtnIsBump(false);
        }, 300);

        return () => {
            clearTimeout(cartTimer);
        };
    }, [items]);

    return (
        <button className={btnStyles} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{countCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;