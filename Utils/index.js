//This is a function usable across many tests
//function to taken the component and attribute
//and return it as wrapper
export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
