import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render ExpensesSummary correctly", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={5012} />);
    expect(wrapper).toMatchSnapshot();
})

test("should render ExpensesSummary correctly", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={45099} />);
    expect(wrapper).toMatchSnapshot();
})