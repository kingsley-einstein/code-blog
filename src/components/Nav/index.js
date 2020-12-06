import React from "react";
import {
 MDBNavbarBrand,
 MDBNavItem,
 MDBNavbarNav,
 MDBIcon,
 MDBContainer
} from "mdbreact";
import Header from "../Header";
import Link from "../Link";

const Nav = ({ darkMode = false, click }) => (
 <Header color="secondary-color-dark">
  <MDBContainer>
   <MDBNavbarBrand>
    <strong className="white-text">Kingsley Victor</strong>
   </MDBNavbarBrand>
   <MDBNavbarNav left>
    <MDBNavItem>
     <Link to="#" onClick={click}>
      <MDBIcon icon={darkMode ? "moon" : "sun"} className="white-text" />
     </Link>
    </MDBNavItem>
   </MDBNavbarNav>
   <MDBNavbarNav right>
    <MDBNavItem>
     <Link to="#!">
      <MDBIcon icon="home" className="white-text pr-2" />
      <span className="white-text">Home</span>
     </Link>
    </MDBNavItem>
    <MDBNavItem>
     <Link to="#!">
      <MDBIcon icon="newspaper" className="white-text pr-2" />
      <span className="white-text">Articles</span>
     </Link>
    </MDBNavItem>
    <MDBNavItem>
     <Link to="#!">
      <MDBIcon icon="folder" className="white-text pr-2" />
      <span className="white-text">Portfolio</span>
     </Link>
    </MDBNavItem>
    <MDBNavItem>
     <Link to="#!">
      <MDBIcon icon="envelope" className="white-text pr-2" />
      <span className="white-text">Contact</span>
     </Link>
    </MDBNavItem>
   </MDBNavbarNav>
  </MDBContainer>
 </Header>
);

export default Nav;
