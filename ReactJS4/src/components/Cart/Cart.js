import React, { useContext } from 'react';

import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const ctx = useContext(CartContext);
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length > 0;

    const cartItemAddHandler = (item) => {

    };

    const cartItemRemoveHandler = (id) => {

    };
    const cartItems = ctx.items.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
    ));

    return (
        <Modal onIsShowCart={props.onIsShowCart}>
            <ul className={styles['cart-items']}>
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onIsShowCart}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;