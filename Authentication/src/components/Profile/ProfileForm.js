import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './ProfileForm.module.css';

const API_KEY = process.env.REACT_APP_FIREBASE_KEY;

const ProfileForm = () => {
  const newPasswordInput = useRef();
  const navigate = useNavigate();
  const idToken = useSelector((state) => state.auth.token);

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordInput.current.value;
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        idToken: idToken,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const data = await response.json();
      let errorMessage = 'Chage Password Failed';
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        alert(errorMessage);
        throw new Error(errorMessage);
      }
    }
    alert('Success!');
    navigate('/auth');
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="6" ref={newPasswordInput} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
