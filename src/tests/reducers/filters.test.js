import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should set state to sort by amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test("should set state to sort by date", () => {
    const stateDefault = {
        text: "",
        sortBy: "amount",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    };
    const action = { type: "SORT_BY_DATE" };

    const state = filtersReducer(stateDefault, action);
    expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
    const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "hello" });
    expect(state.text).toBe("hello");
})

test("should set startDate filter", () => {
    const state = filtersReducer(undefined, { type: "SET_START_DATE", startDate: moment(1000)});
    expect(state.startDate).toEqual(moment(1000));
});

test("should set endDate filter", () => {
    const state = filtersReducer(undefined, { type: "SET_END_DATE", endDate: moment(5000)});
    expect(state.endDate).toEqual(moment(5000));
});