import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">{/* 사용자 지정 컴포넌트에 className을 쓸 경우 해당 컴포넌트에서 props.className로 접근 할 수 있다.*/}
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilterYear={filterChangeHandler}
            />
            {props.items.map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;