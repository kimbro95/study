import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className='expense-item'>  {/* JSX는 class => className으로 사용*/}
            <div>{props.date.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;