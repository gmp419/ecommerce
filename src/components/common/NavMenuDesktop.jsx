import React, { Component, Fragment } from "react";
import { Button, Col, Container, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from "../../assets/images/easyshop.png";
import { Link } from "react-router-dom";
import MegaMenuAll from "../home/MegaMenuAll";

export class NavMenuDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: "sideNavClose",
      isOverlay: "ContentOverlayClose",
    };
  }

  MenuClick = () => {
    if (this.state.isOpen === "sideNavOpenDesktop") {
      this.setState({
        isOpen: "sideNavClose",
        isOverlay: "ContentOverlayClose",
      });
    } else {
      this.setState({
        isOpen: "sideNavOpenDesktop",
        isOverlay: "ContentOverlayOpen",
      });
    }
  };
  render() {
    return (
      <Fragment>
        <div className="navbar-wrapper">
          <Navbar bg="light" fixed={"top"}>
            <Container
              fluid={"true"}
              className="fixed-top zindex shadow-sm p-2 mb-0 bg-white"
            >
              <Row className="align-items-center p-1 mt-1">
                <Col className="d-inline-flex" lg={4} md={4} sm={12} xs={12}>
                  <Button className="btn site-btn p-2" onClick={this.MenuClick}>
                    <i className="fa fa-bars"></i>
                  </Button>
                  <Link to="/">
                    {" "}
                    <img className="nav-logo" src={logo} />{" "}
                  </Link>
               
                </Col>

                <Col className="" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input type="text" className="form-control" />
                    <Button type="button" className="btn site-btn">
                      <i className="fa fa-search"> </i>
                    </Button>
                  </div>
                </Col>

                <Col
                  className="align-content-around d-flex justify-content-center"
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                >
              
                  <Link to="/notification" className="btn">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <Link to="/favourite" className="btn">
                    <i className="fa h4 fa-heart"></i>
                    <sup>
                      <span className="badge text-white bg-danger">2</span>
                    </sup>
                  </Link>
                  <a className="btn">
                    <i className="fa h4 fa-mobile-alt"></i>
                  </a>
                  <Link to="/login" className="h4 btn">
                    LOGIN
                  </Link>

                  <Button className="cart-btn">
                    <i className="fa fa-shopping-cart"></i> 3{" "}
                  </Button>
                </Col>
              </Row>
            </Container>
            <div className={this.state.isOpen}>
              <MegaMenuAll />
            </div>

            <div className={this.state.isOverlay}></div>
          </Navbar>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
