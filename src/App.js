import React from "react";
import { Container, Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Cv from "./Pages/Cv/Cv";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={7}>
        {/* the left Profile component's responsive sizing */}
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Profile />
        </Grid>
        {/* the right components' responsive sizing */}

        <Grid item xs>
          <Router>
            <div className="main-content">
              <Cv />
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
