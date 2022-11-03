import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }

        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    const userNameChangeHandler = (e) => {
        setEnteredUserName(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    return (
        <Card cssClass={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="userName">UserName</label>
                <input id="userName" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add</Button>
            </form>
        </Card>
    );
};

export default AddUser;