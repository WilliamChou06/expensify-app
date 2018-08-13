import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

test("should render Header", () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test("should call startLogout on button click", () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find("button").simulate("click");
    expect(startLogout).toHaveBeenCalled();
})