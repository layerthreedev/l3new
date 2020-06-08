import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import Services from "./views/Services/Services";
import ContactUs from "./views/ContactUs/ContactUs";

var hist = createBrowserHistory();

ReactDOM.render(
    <div>

  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUs} />
      <Route path="/services" component={Services} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
    </div>,
  document.getElementById("root")
);
