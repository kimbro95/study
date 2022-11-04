import React from 'react';

import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
    let usersList = '';

    if (props.users.length > 0) {
        usersList =
            <ul>
                {props.users.map((user, index) =>
                    <li key={index}>
                        {user.name} ({user.age})
                    </li>
                )}
            </ul>;
    }

    return (
        <Card cssClass={styles.users}>
            {usersList}
        </Card>
    );
};

export default UsersList;