import React from 'react';

import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = () => {
    const addUserHandler = (e) => {
        e.preventDefault();

    };

    return (
        <Card cssClass={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="userName">UserName</label>
                <input id="userName" type="text" />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" />
                <button type="submit">Add</button>
            </form>
        </Card>
    );
};

export default AddUser;