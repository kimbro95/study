import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022, 9, 5);
    const expenseTtitle = 'Car Insurance';
    const expenseAmount = 213.45;

    return (
        <div className='expense-item'>  {/* JSX는 class => className으로 사용*/}
            <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTtitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;