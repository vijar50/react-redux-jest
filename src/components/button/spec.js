import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../../Utils";
import SharedButton from "./index";

//Shared Button Component Tests
describe("SharedButton Component", () => {
  //Test Case 1
  describe("Checking PropTypes", () => {
    //AT TEST
    it("Should not throw a warning", () => {
      //
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };
      //Test the prop types
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  //Test Case 2
  describe("Component Renders", () => {
    let wrapper;
    let mockFunc;
    //BEFORE TEST
    beforeEach(() => {
      //Create a mock function
      mockFunc = jest.fn();
      const props = {
        buttonText: "Example Button Text",
        emitEvent: mockFunc
      };
      //perform a render of the html of SharedButton
      wrapper = shallow(<SharedButton {...props} />);
    });

    //AT TEST
    it("Should Render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    //AT TEST - EVENT TEST
    it("Should emit callback on click event", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      //simulate a click on the button element
      button.simulate("click");
      //make a mock call of mockFunc and get its length
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
