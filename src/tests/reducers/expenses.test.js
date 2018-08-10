import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense (wrong id)", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: 5
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should add expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: "109",
            description: "hello",
            note: "",
            amount: 6000,
            createdAt: moment(0)
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test("should edit expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates: {
            description: "Rice"
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({...expenses[0], ...action.updates});
});

test("should not edit expense (wrong id)", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "random",
        updates: {
            description: "Rice"
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual(expenses[0]);
});

test("should set expenses", () => {
    const action = {
        type: "SET_EXPENSES",
        expenses: [
            {
                id:"setEXPID",
                description: "Gas bill",
                note: "Very imporntat",
                amount: 1000,
                createdAt: 11234442
            },
            {
                id:"setEXPID22",
                description: "Water bill",
                note: "Very gud",
                amount: 4142,
                createdAt: 222
            }
        ]
        
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(action.expenses)
})