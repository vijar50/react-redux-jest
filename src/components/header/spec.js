import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "../../../Utils";

//Do a shallow render of the Header component, parsing props
//return component
const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

//Header Component Test
describe("Header Component", () => {
  let component;

  //Before each test is run
  beforeEach(() => {
    component = setUp();
  });

  //Test Step
  it("Should render without errors", () => {
    //This console log will output HTML of Header component
    console.log(component.debug());
    //Find .headerComponent class, store it in wrapper
    const wrapper = findByTestAttr(component, "headerComponent");
    //3. Check that wrapper exists on the page
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = findByTestAttr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
