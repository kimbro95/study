import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            enteredTitle: e.target.value,
        });
    };

    const amountChageHandler = (e) => {
        setUserInput({
            ...userInput,
            enteredAmount: e.target.value,
        });
    };

    const dateChageHandler = (e) => {
        setUserInput({
            ...userInput,
            enteredDate: e.target.value,
        });
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChageHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2022-01-01" max="2022-12-31" onChange={dateChageHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;