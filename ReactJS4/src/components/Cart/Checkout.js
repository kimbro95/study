import styles from './Checkout.module.css';

const Checkout = (props) => {
    const submitHandler = (e) => {
        e.preventDefault();

    };
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' />
            </div>
            <div className={styles.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' />
            </div>
            <div className={styles.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' />
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onIsShowCart}>
                    Cancel
                </button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;