import React from "react";
import { shallow } from "enzyme";
import { AppContainer } from "./AppContainer";

describe("Container", () => {
  it("renders a default posts page", () => {
    const wrapper = shallow(<AppContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
