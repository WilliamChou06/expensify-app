import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const uid = "thisisatestuid";
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt}
    })
    console.log(expensesData)
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})

test("should setup edit expense action object", () => {
    const action = editExpense("123abcd", {description: "Coffee"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abcd",
        updates: {description: "Coffee"}
    });
});

test("should setup add expense action object", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
});

test("should add expense to database and store", (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: "Mouse",
        amount: 3000,
        note: "Better mouse",
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
    }).then((snapshot) => {
        const val = snapshot.val();
        expect(val).toEqual(expenseData)
        done();
    })

})

test("should add expense with defaults to database and store", (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefault = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
    }).then((snapshot) => {
        const val = snapshot.val();
        expect(val).toEqual(expenseDefault)
        done();
    })

});

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
      type: "SET_EXPENSES",
      expenses
  })  
});

test("should fetch the expenses from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses          
        });
        done();
    })
})

test("should remove expenses from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startRemoveExpense({id: expenses[2].id})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id: expenses[2].id
        })
    })

    return database.ref(`users/${uid}/expenses/${expenses[2].id}`).once("value").then((snapshot) => {
        expect(snapshot.val()).toBe(null);
        done();
    })
})

test("should edit expenses from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    const updates = expenses[0]
    store.dispatch(startEditExpense(expenses[2].id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id: expenses[2].id,
            updates
        })
    })

    return database.ref(`users/${uid}/expenses/${expenses[2].id}`).once("value").then((snapshot) => {
        expect(snapshot.val()).toEqual(updates);
        done();
    })
})