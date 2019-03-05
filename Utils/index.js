import checkPropTypes from "check-prop-types";

//This is a function usable across many tests
//function to taken the component and attribute
//and return it as wrapper
export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

//checkPropTypes - manually check compatible proptypes from
//Headline
//checkPropTypes(propTypeSpecs,valueToCheck,location,compToThrowError)
export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};
