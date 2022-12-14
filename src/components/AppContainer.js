import React, { Component } from "react";
import { NewList } from "./posts/NewList";
import { PostsList } from "./posts/PostsList";

export class AppContainer extends Component {
  state = {
    posts: [{ title: "John", body: "Doe" }],
  };
  addPost = (post) => {
    const { posts } = this.state;

    this.setState({
      posts: [...posts, post],
    });
  };

  deletePost = (postIndex) => {
    const { posts } = this.state;
    const updatedPosts = [...posts];
    updatedPosts.splice(postIndex, 1);

    this.setState({
      posts: updatedPosts,
    });
  };

  render() {
    const { addPost } = this;
    const { posts } = this.state;
    return [
      <NewList key="new-post" onPostCreated={addPost} />,
      posts.length > 0 ? (
        <PostsList
          key="posts-list"
          posts={posts}
          onPostDeleted={this.deletePost}
        />
      ) : null,
    ];
  }
}
