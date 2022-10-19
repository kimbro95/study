import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = (e) => {
        /*
        리액트가 상태를 업데이트 하는 경우 바로 실행하지 않는다. 그래서 아래와 같은 방식(주석처리된 코드)으로 만약 동시에 많은 상태를 업데이트한다면 오래되거나 잘못된 상태값을 의존 할 수 있다.
        그 아래(주석처리가 되지않은 코드)와 같이 함수를 사용하면 항상 최신 상태의 스냅샷에서 작업 할 수 있는 방법이다.
        */
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // });
        setUserInput((prev) => {
            return {
                ...prev,
                enteredTitle: e.target.value,
            };
        });
    };

    const amountChangeHandler = (e) => {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredAmount: e.target.value,
            };
        });
    };

    const dateChangeHandler = (e) => {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredDate: e.target.value,
            };
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: Number(userInput.enteredAmount),
            date: new Date(userInput.enteredDate),
        }

        props.onSaveFormData(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2022-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;