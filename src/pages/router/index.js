import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Components from "../../components";

const Routing = () => (
 <div>
  <Router>
   <Components.Nav></Components.Nav>
  </Router>
 </div>
);

export default Routing;
