import moxios from "moxios";
import { testStore } from "./../../Utils";
import { fetchPosts } from "./../actions";

//Moxios is used to fake Async requests
//This function will generate fake posts

//Fake Store Tests
describe("fetchPosts action", () => {
  //BEFORE TEST
  beforeEach(() => {
    //install moxios - whenever we hit axios it replaces
    //it with a mock function
    moxios.install();
  });

  //AFTER TEST
  afterEach(() => {
    //restore axios library to former state
    moxios.uninstall();
  });

  //AT TEST
  test("Store is updated correctly", () => {
    //our mock state data to use for tests
    const expectedState = [
      {
        title: "Example title 1",
        body: "Some Text"
      },
      {
        title: "Example title 2",
        body: "Some Text"
      },
      {
        title: "Example title 3",
        body: "Some Text"
      }
    ];

    //call our creation of a dummy store
    const store = testStore();

    //fake an api call and return the fake state above
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      //fake response with dummy data above
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    //get the posts from the fake store and verify they match
    //the expectedState above
    //create a dispatch call to the fake store, retreiving the posts
    return store.dispatch(fetchPosts()).then(() => {
      //put state of fake store in newState
      const newState = store.getState();
      //compare the value in the store with the expectedState
      //dummy data above
      expect(newState.posts).toBe(expectedState);
    });
  });
});
