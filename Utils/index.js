import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./../src/reducers";
import { middlewares } from "./../src/createStore";
//This file contains functions usable across many tests

//This takes in the component(in text form - shallow) and attribute, find the
//data-test tag with attr and return it as wrapper
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

//This function will create a dummy store for integration test
export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
