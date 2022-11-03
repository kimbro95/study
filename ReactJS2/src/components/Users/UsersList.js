import React from 'react';

import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
    return (
        <Card cssClass={styles.users}>
            <ul>
                {props.users.map((user) =>
                    <li>{user.name} ({user.age})</li>
                )}
            </ul>
        </Card>
    );
};

export default UsersList;