import React, { useImperativeHandle, useRef } from 'react';

import classes from './Input.module.css';

// 재사용이 가능한 컴포넌트는 props를 사용하는게 좋다.
const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    // useImperativeHandle - 컴포넌트나 컴포넌트 내부에서 오는 기능들을 명령적으로 사용할 수 있게 해준다.(자주 사용하지는 않는다.)
    useImperativeHandle(ref, () => {
        return {
            activate: activate,
        };
    });

    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;