import React, { useEffect, useState, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT_EMAIL') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'EMAIL_INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT_PASSWORD') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'PASSWORD_INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT_EMAIL', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT_PASSWORD', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'EMAIL_INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.activate();
    } else {
      passwordInputRef.current.activate();
    }
  };

  /*
  등호의 왼쪽에서 중괄호를 사용 할 경우 ex) emailIsValid -> 별칭(Alias)가 된다.
  emailIsValid, passwordIsValid를 종속성 및 setFormIsValid에 사용하는 이유
  - useEffect를 최적화하고 이펙트의 불필요한 실행을 줄이기 위해
  */
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const handler = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    /*
    CleanUp 함수
    첫 번째 사이트이펙트가 실행되기 전에는 실행 X
    이후 사이드이펙트가 실행시 사이드이펙트가 실행되기전에 실행된다.
    */
    return () => {
      clearTimeout(handler);
    };
  }, [emailIsValid, passwordIsValid]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type="email"
          id="email"
          label="E-mail"
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          type="password"
          id="password"
          label="Password"
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
