import { useState } from "react";

const useInput = (validateValue) => {
    const [isToched, setIsToched] = useState(false);
    const [enteredValue, setEnteredValue] = useState('');

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isToched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    const inputBlurHandler = () => {
        setIsToched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsToched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        reset,
        valueChangeHandler,
        inputBlurHandler,
    }
};

export default useInput;