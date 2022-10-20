import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isOpenCloseForm, setIsOpenCloseForm] = useState(false);
    const expenseSaveDataHandler = (expenseSaveata) => {
        console.log('Call expenseSaveDataHandler in NewExpense.js');
        const expenseData = {
            ...expenseSaveata,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const openCloseFormHandler = () => {
        setIsOpenCloseForm(!isOpenCloseForm);
    }

    return (
        <div className="new-expense">
            {isOpenCloseForm && (
                <ExpenseForm
                    onSaveFormData={expenseSaveDataHandler}
                    onOpenCloseForm={openCloseFormHandler}
                />
            )}
            {!isOpenCloseForm && (
                <button type="button" onClick={openCloseFormHandler}>Add Expense</button>
            )}
        </div>
    );
}

export default NewExpense;