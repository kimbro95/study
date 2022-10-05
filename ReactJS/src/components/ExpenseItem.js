import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>  {/* JSX는 class => className으로 사용*/}
            <div>2022년 10월 05일</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$213.45</div>
            </div>
        </div>
    );
}

export default ExpenseItem;