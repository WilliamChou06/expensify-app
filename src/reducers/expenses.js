const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      // state.forEach((item, i) => {
      //   item.id == action.id && state.splice(i, 1)
      // })
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        return (expense.id == action.id) ? {...expense, ...action.updates} : expense
      })
    default:
      return state;
  }
};

export default expensesReducer