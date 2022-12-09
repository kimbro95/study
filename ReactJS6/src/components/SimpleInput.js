import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameToched, setEnteredNameToched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);

    if (e.target.value.trim() !== '') {
      setIsValid(true);
    }
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameToched(true);

    if (enteredName.trim() === '') {
      setIsValid(false);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameToched(true);

    if (enteredName.trim() === '') {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    // useState 방식
    console.log(enteredName);

    // nameInputRef.current.value = '';  //직접적으로 DOM을 작동하는 방식은 X
    setEnteredName('');
  };

  const nameInputIsInValid = !isValid && enteredNameToched;
  const nameInputClass = nameInputIsInValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInValid && <p className="error-text">Check Name Input</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
