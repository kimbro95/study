import React from 'react';

import Button from './Button';
import Card from './Card';
import styles from './ModalOverlay.module.css';

const ModalOverlay = (props) => {
    return (
        <Card cssClass={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onErrorHandler}>Okay</Button>
            </footer>
        </Card>
    );
};

export default ModalOverlay;