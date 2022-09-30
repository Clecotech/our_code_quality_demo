import React, { Component } from "react";
import "./App.css";
import { AppContainer } from "./components/AppContainer";
import { Container, Typography, Box } from "@mui/material";
import Logo from "./components/Image/white.png";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
        </header>
        <Container>
          <Box className="Appcontainer">
            <p className="App_intro">Attendence Sheet</p>

            <AppContainer />
          </Box>
        </Container>
      </div>
    );
  }
}

export default App;
