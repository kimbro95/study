import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameToched, setEnteredNameToched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const nameInputRef = useRef();

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
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

    // uesRef 방식
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

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
          ref={nameInputRef}
          type='text'
          id='name'
          value={enteredName}
          onChange={nameInputChangeHandler}
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
