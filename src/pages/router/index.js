import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBContainer, MDBBox } from "mdbreact";
import Components from "../../components";
import Home from "../Home";
import "./index.css";

const Routing = () => {
 const [isDarkMode, setMode] = React.useState(false);
 const changeMode = () => setMode(!isDarkMode);
 const skin = isDarkMode ? "black" : "white";
 return (
  <div className={skin}>
   <Router>
    <MDBBox
     display="flex"
     flex="column"
    >
     <Components.Nav darkMode={isDarkMode} click={changeMode}></Components.Nav>
     <MDBContainer fluid>
      <Switch>
       <Route path="/" component={Home} />
      </Switch>
     </MDBContainer>
    </MDBBox>
   </Router>
  </div>
 );
};

export default Routing;
