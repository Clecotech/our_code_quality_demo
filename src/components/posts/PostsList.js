import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "./List";
import "./List.css";

export class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string,
      })
    ).isRequired,
    onPostDeleted: PropTypes.func,
  };

  render() {
    const { posts, onPostDeleted } = this.props;
    const rows = posts.map(({ title, body }, index) => (
      <List
        key={`${title}-${body}-${index}`}
        index={index}
        title={title}
        body={body}
        onPostDeleted={onPostDeleted}
      />
    ));

    return (
      <table>
        <tbody>
          <div className="tbodyrows">{rows}</div>
        </tbody>
      </table>
    );
  }
}
