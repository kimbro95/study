import { useRef, useState } from 'react';

import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.length !== 5;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
    });
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = !isFiveChars(enteredPostalCode);

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeIsValid,
        });

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid;
        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
        });
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={`${styles.control} ${formInputValidity.name ? '' : styles.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    ref={nameInputRef}
                />
                {!formInputValidity.name && <p>Pls enter a valid name</p>}
            </div>
            <div className={`${styles.control} ${formInputValidity.street ? '' : styles.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input
                    type='text'
                    id='street'
                    ref={streetInputRef}
                />
                {!formInputValidity.street && <p>Pls enter a valid street</p>}
            </div>
            <div className={`${styles.control} ${formInputValidity.postalCode ? '' : styles.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input
                    type='text'
                    id='postal'
                    ref={postalCodeInputRef}
                />
                {!formInputValidity.postalCode && <p>Pls enter a valid postalCode ( 5 characters long )</p>}
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