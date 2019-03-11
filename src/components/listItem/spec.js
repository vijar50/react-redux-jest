import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../../Utils";
import ListItem from "./index";

//ListItem Component Test
describe("ListItem Component", () => {
  //Test Case 1
  describe("Checking PropTypes", () => {
    //AT TEST
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some Text"
      };
      //test the prop types
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  //Test Case 2
  describe("Component Renders", () => {
    //create empty variable to store shallow render
    let wrapper;

    //BEFORE TEST
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some Text"
      };
      //perform a render of the html of ListItem
      wrapper = shallow(<ListItem {...props} />);
    });

    //AT TEST
    it("Should render without error", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    //AT TEST
    it("Should render a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    //AT TEST
    it("Should render a description", () => {
      const description = findByTestAttr(wrapper, "componentDesc");
      expect(description.length).toBe(1);
    });
  });

  //Test Case 3
  describe("Should not render", () => {
    let wrapper;

    //BEFORE TEST
    beforeEach(() => {
      const props = {
        //No title
        desc: "Some Text"
      };
      //perform a render of the html of ListItem
      wrapper = shallow(<ListItem {...props} />);
    });

    //AT TEST
    it("Component is not rendered", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
