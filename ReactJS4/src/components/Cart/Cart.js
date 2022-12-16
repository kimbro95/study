import React, { useContext, useState } from 'react';

import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import useFetch from '../../hooks/useFetch';

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const { isLoading, error, sendRequest: sendOrderRequest } = useFetch();
    const ctx = useContext(CartContext);
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length > 0;

    const cartItemAddHandler = (item) => {
        ctx.addItem({ ...item, amount: 1 });
    };

    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = (submitData) => {
        const orderData = {
            user: submitData,
            orderItems: ctx.items,
        };

        sendOrderRequest(
            {
                url: 'https://react-http-ff0f3-default-rtdb.asia-southeast1.firebasedatabase.app/order.json',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: orderData,
            },
            null
        );
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

    const modalActions =
        <div className={styles.actions}>
            <button
                className={styles['button--alt']}
                onClick={props.onIsShowCart}>
                Close
            </button>
            {hasItems &&
                <button
                    className={styles.button}
                    onClick={orderHandler}>
                    Order
                </button>}
        </div>;

    return (
        <Modal onIsShowCart={props.onIsShowCart}>
            <ul className={styles['cart-items']}>
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onIsShowCart={props.onIsShowCart} />}
            {!isCheckout && modalActions}
        </Modal>
    );
};

export default Cart;