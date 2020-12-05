import React from "react";
import { MDBNavbarBrand, MDBNavItem, MDBNavbarNav, MDBIcon } from "mdbreact";
import Header from "../Header";
import Button from "../Button";

const Nav = () => (
 <Header color="secondary-color-dark">
  <MDBNavbarBrand>
   <strong className="white-text">DEV NUGGETS</strong>
  </MDBNavbarBrand>
  <MDBNavbarNav right>
   <MDBNavItem>
    <Button color="success" rounded>
     <MDBIcon className="cyan-text pr-3" icon="envelope" size="lg" />
     <span>Contact</span>
    </Button>
   </MDBNavItem>
  </MDBNavbarNav>
 </Header>
);

export default Nav;
