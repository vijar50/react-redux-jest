import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    //properties of the button
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch()
    };
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />

          {/* Assuming there are posts... */}
          {posts.length > 0 && (
            <div>
              {/* Map through all posts, each post is post */}
              {/* index is our key */}
              {posts.map((post, index) => {
                //destructure individual posts title/body
                const { title, body } = post;
                //put title and description as body into configListItem
                const configListItem = {
                  title,
                  desc: body
                };
                return (
                  // Spread configListItem props into ListItem
                  <ListItem key={index} {...configListItem} />
                );
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

//connect our component to the store
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
