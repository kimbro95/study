import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const expenseSaveDataHandler = (expenseSaveata) => {
        console.log('Call expenseSaveDataHandler in NewExpense.js');
        const expenseData = {
            ...expenseSaveata,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveFormData={expenseSaveDataHandler} />
        </div>
    );
}

export default NewExpense;