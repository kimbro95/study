import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './AuthForm.module.css';

const API_KEY = process.env.REACT_APP_FIREBASE_KEY;

const AuthForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredEamil = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) { // 로그인 처리
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEamil,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setIsLoading(false);
      const data = await response.json();
      if (!response.ok) {
        let errorMessage = 'Login Failed';
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
          alert(errorMessage);
          throw new Error(errorMessage);
        }
      }
      console.log(data);
      navigate('/');
    } else {  // 회원가입 처리
      try {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEamil,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        setIsLoading(false);
        if (!response.ok) {
          const data = await response.json();
          let errorMessage = 'Authentication Failed';
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
            alert(errorMessage);
            throw new Error(errorMessage);
          }
        }
        alert('Create Account');
      } catch (e) {
        throw new Error(e);
      }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
