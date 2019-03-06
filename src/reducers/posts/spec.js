//TDD Style spec
import { types } from "../../actions/types";
import postsReducer from "./reducer";

//REDUCER TESTS
describe("Posts Reducer", () => {
  //AT TEST
  it("Should return default state", () => {
    //postsReducer() is the anon function in reducer.js
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  //AT TEST
  it("Should return new state if receiving type", () => {
    const posts = [
      { title: "Test 1" },
      { title: "Test 2" },
      { title: "Test 3" }
    ];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      //
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
