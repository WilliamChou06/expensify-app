import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";


// Problem with ternary operator here
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length < 1 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} {...expense} />
                ))
            )
        }
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);

