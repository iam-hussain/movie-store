import React from "react";
import { Link } from "react-router-dom";

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class MainNavbar extends React.Component {
  state = {};

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <h1 className="display-4 text-white">Movie Store</h1>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("../../assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/movie"
                      id="tooltipMovies"
                    >Movies
                      
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltipMovies">
                      See all the latest movies
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link-icon" href="/actor" id="tooltipActors">
                       Actors
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltipActors">
                    See all the movies actors
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                    <NavLink className="nav-link-icon" href="/producer" id="tooltipProducer">
                       Producer
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltipProducer">
                    See all the movies producer
                    </UncontrolledTooltip>
                  </NavItem>

                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default MainNavbar;
