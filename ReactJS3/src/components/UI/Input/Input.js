import React from 'react';

import classes from './Input.module.css';

// 재사용이 가능한 컴포넌트는 props를 사용하는게 좋다.
const Input = (props) => {
    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
};

export default Input;