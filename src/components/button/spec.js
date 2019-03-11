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
    //BEFORE TEST
    beforeEach(() => {
      const props = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };
      //perform a render of the html of SharedButton
      wrapper = shallow(<SharedButton {...props} />);
    });

    //AT TEST
    it("Should Render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
