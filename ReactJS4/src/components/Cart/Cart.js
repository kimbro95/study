import styles from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = [{ id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99, },].map((item) => <li key={item.id}>{item.name}</li>);

    return (
        <Modal onIsShowCart={props.onIsShowCart}>
            <ul className={styles['cart-items']}>
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>$45.08</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onIsShowCart}>Close</button>
                <button className={styles.button}>0 Order</button>
            </div>
        </Modal>
    );
};

export default Cart;