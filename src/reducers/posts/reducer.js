import { types } from "../../actions/types";
//anon function
//action object contains type and a payload
//Reducer - A switch statement.
//Check whether action types match, return new state
export default (state = [], action) => {
  //If the action type is GET_POSTS, return the
  //payload of posts content, else return default state
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};
