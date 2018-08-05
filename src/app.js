import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";


const store = configureStore();
store.dispatch(addExpense({description: "Water bill", amount: 345000}))
store.dispatch(addExpense({description: "Gas bill", createdAt: 1000}))
store.dispatch(addExpense({description: "Rent", amount: 109500}))
store.dispatch(addExpense({description: "Groceries", amount: 21300000}))
store.dispatch(addExpense({description: "Cat Food", amount: 20000, createdAt: 1532685246289}))
store.dispatch(addExpense({description: "Sausage", amount: 21300000, createdAt: 1532681246282}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));
