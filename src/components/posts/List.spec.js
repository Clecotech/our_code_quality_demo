import React from "react";
import { shallow } from "enzyme";
import { List } from "./List";

describe("Post", () => {
  const examplePost = {
    index: 0,
    title: "John",
    body: "Doe",
  };

  it("renders a post's title and body", () => {
    const wrapper = shallow(<Post {...examplePost} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("delete button clicked", () => {
    it("fires onPostDeleted event", () => {
      const mockedEvent = jest.fn();
      const wrapper = shallow(
        <Post {...examplePost} onPostDeleted={mockedEvent} />
      );
      wrapper.find("#delete").simulate("click");
      expect(mockedEvent.mock.calls.length).toBe(1);
    });
  });
});
