import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">{/* 사용자 지정 컴포넌트에 className을 쓸 경우 해당 컴포넌트에서 props.className로 접근 할 수 있다.*/}
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilterYear={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;