import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAttr } from "../../../Utils";

//Do a shallow HTML render of a dummy Headline component
//parsing in props(header,desc) and return component and props
const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

//Headline Component Tests
describe("Headline Component", () => {
  //Test Case 1
  describe("Have props", () => {
    let wrapper;
    //BEFORE TEST - create test obj to parse props to setUp
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      wrapper = setUp(props);
    });

    //AT TEST
    it("should render component without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    //AT TEST
    it("Should render a h1 tag", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    //AT TEST
    it("Should render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  //Test Case 2
  describe("Have NO props", () => {
    let wrapper;
    //BEFORE TEST - Don't parse any props to setUp
    beforeEach(() => {
      wrapper = setUp();
    });

    //AT TEST
    it("Should not render", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
