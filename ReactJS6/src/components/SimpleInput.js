import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameToched, setEnteredNameToched] = useState(false);

  const isValid = enteredName.trim() !== '';
  const nameInputIsInValid = !isValid && enteredNameToched;
  const nameInputClass = nameInputIsInValid ? 'form-control invalid' : 'form-control';

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameToched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameToched(true);

    if (!isValid) {
      return;
    }
    setEnteredName('');
    setEnteredNameToched(false);
  };

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
