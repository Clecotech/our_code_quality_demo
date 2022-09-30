import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Container, Button, Box, TextField } from "@mui/material";
import "./NewPost.css";
export class NewPost extends Component {
  static propTypes = {
    onPostCreated: PropTypes.func.isRequired,
  };

  state = {
    title: "",
    body: "",
    errorMessage: "",
  };

  onPostSaved = (event) => {
    const { title, body } = this.state;

    if (title.length === 0) {
      return this.setState({
        errorMessage: "Title not provided",
      });
    }

    if (body.length === 0) {
      return this.setState({
        errorMessage: "Body not provided",
      });
    }

    this.props.onPostCreated({ title, body });
    this.setState({
      title: "",
      body: "",
      errorMessage: "",
    });
  };

  onPostValueChanged = (key) => (event) =>
    this.setState({ [key]: event.target.value });

  render() {
    const { title, body, errorMessage } = this.state;
    return (
      <Container>
        <Grid container>
          <Grid item xs={12} className="Container">
            <Box className="TextBox">
              <TextField
                fullWidth
                type="text"
                variant="outlined"
                label="Please Enter Your First Name"
                value={title}
                onChange={this.onPostValueChanged("title")}
              />

              <TextField
                fullWidth
                type="text"
                label="Please Enter Your Second Name"
                value={body}
                onChange={this.onPostValueChanged("body")}
                sx={{ marginTop: "1rem" }}
              />
            </Box>
            <div className="btn">
              <Button
                variant="contained"
                onClick={this.onPostSaved}
                sx={{ backgroundColor: "#222" }}
              >
                Create Post
              </Button>
            </div>

            {errorMessage.length === 0 ? null : (
              <div className="error">{errorMessage}</div>
            )}
          </Grid>
        </Grid>
      </Container>
    );
  }
}
