import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Grid } from "@mui/material";
import "./List.css";
export class List extends Component {
  static propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    onPostDeleted: PropTypes.func,
  };

  state = {
    showTitleBackwards: false,
  };

  onTitleClicked = () =>
    this.setState({
      showTitleBackwards: !this.state.showTitleBackwards,
    });

  onDeletePostClick = () =>
    this.props.onPostDeleted && this.props.onPostDeleted(this.props.index);

  render() {
    const { title, body } = this.props;
    const { showTitleBackwards } = this.state;
    return (
      <div className="Table">
        <Grid container>
          <Grid item xs={2} sm={4}>
            <div className="PostContainer">
              {showTitleBackwards ? title.split("").reverse().join("") : title}
            </div>
          </Grid>
          <Grid item xs={2} sm={4}>
            <div className="PostContainer">{body}</div>
          </Grid>
          <Grid item xs={8} sm={4} className="PostContainer">
            <div className="Postbtn">
              <Button
                id="reverse"
                onClick={this.onTitleClicked}
                variant="contained"
                sx={{ borderRadius: "1.5rem" }}
              >
                Reverse Title
              </Button>

              <Button
                id="delete"
                onClick={this.onDeletePostClick}
                variant="outlined"
                sx={{ borderRadius: "1.5rem" }}
              >
                Delete Post
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
