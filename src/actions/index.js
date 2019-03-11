import { types } from "./types";
import axios from "axios";

//Axios is used to make Async requests
//This function will retrieve posts from
//typicode/posts API. Called in App.js
export const fetchPosts = () => async dispatch => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(res => {
      dispatch({
        type: types.GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => {
      //console.log(err)
    });
};
