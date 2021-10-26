import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Route exact path="/" exact component={} /> */}
      <Switch>
        {/* <Route exact path="/workshops" exact component={} />
        <Route exact path="/technologies" exact component={} />
        <Route exact path="/team" exact component={} />
        <Route exact path="/community" exact component={} />
        <Route exact path="/getintouch" exact component={} />
        */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
