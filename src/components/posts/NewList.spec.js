import React from "react";
import { shallow, mount } from "enzyme";
import { NewList } from "./NewList";

describe("NewList", () => {
  it("renders empty by default", () => {
    const wrapper = shallow(<NewList onPostCreated={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("post creation", () => {
    describe("#onPostValueChanged fired", () => {
      it("unit: updates respective input value state", () => {
        const event = { target: { value: "Test Value" } };
        const wrapper = shallow(<NewList onPostCreated={jest.fn()} />);
        wrapper.instance().onPostValueChanged("title")(event);
        expect(wrapper.state("title")).toBe("Test Value");
      });
    });

    describe("title not provided", () => {
      it("displays error message", () => {
        // UH OH, test with state directly?
        const wrapper = mount(<NewList onPostCreated={jest.fn()} />);
        // Needed a mount here because instance can not be accessed in shallow()
        wrapper.find("input").at(1).instance().value = "Example Body";
        wrapper.find("button").simulate("click");
        expect(wrapper.state("errorMessage")).toBe("Name not provided");
      });
    });

    describe("body not provided", () => {
      it("displays error message", () => {
        const wrapper = mount(<NewList onPostCreated={jest.fn()} />);
        wrapper.setState({ title: "Example Title" });
        wrapper.find("button").simulate("click");
        expect(wrapper.state("errorMessage")).toBe("Email not provided");
      });
    });

    describe("valid input provided", () => {
      it("resets form values to empty", () => {
        const mockedEvent = jest.fn();
        const wrapper = mount(<NewList onPostCreated={mockedEvent} />);
        wrapper.setState({ title: "Example Title", body: "Example Body" });
        wrapper.find("button").simulate("click");
        expect(wrapper.state("errorMessage")).toBe("");

        const { title, body } = wrapper.state();
        expect(title).toBe("");
        expect(body).toBe("");
      });
    });
  });
});
