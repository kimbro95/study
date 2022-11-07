import React, { useState, Fragment } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Pls enter a valid name n age',
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Pls enter a valid age > 0',
            });
            return;
        }

        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    const userNameChangeHandler = (e) => {
        setEnteredUserName(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Fragment>{/* div-soup 방지를 위해 <React.Fragment></React.Fragment>, <Fragment></Fragment> 또는 <></>를 사용 할 수 있다.*/}
            {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler} />}
            <Card cssClass={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="userName">UserName</label>
                    <input id="userName" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add</Button>
                </form>
            </Card>
        </Fragment>
    );
};

export default AddUser;