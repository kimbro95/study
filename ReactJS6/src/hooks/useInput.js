import { useReducer } from "react";

const initialInputState = {
    value: '',
    isToched: false,
};

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isToched: state.isToched };
    }
    if (action.type === 'BLUR') {
        return { value: state.value, isToched: true };
    }
    if (action.type === 'RESET') {
        return { isTouched: false, value: '' };
    }
    return initialInputState;
};

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isToched;

    const valueChangeHandler = (e) => {
        dispatch({ type: 'INPUT', value: e.target.value });
    };

    const inputBlurHandler = () => {
        dispatch({ type: 'BLUR' });
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        reset,
        valueChangeHandler,
        inputBlurHandler,
    }
};

export default useInput;