import React from "react";
import { shallow } from "enzyme";
import Productos from "./Productos";

describe("Productos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Productos />);
    expect(wrapper).toMatchSnapshot();
  });
});
