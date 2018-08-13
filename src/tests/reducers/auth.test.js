import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
    const action = {
        type: "LOGIN",
        uid: "chou1234"
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({
        uid: action.uid
    })
});

test("should clear uid logout", () => {
    const action = {
        type: "LOGOUT"
    };
    const state = authReducer({uid: "chou444"}, action);
    expect(state).toEqual({});
});