import React, { Component, Fragment } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import logo from "../../assets/images/easyshop.png";
import { Link } from "react-router-dom";
import MegaMenuMobile from "../home/MegaMenuMobile";

export class NavMenuMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: "sideNavClose",
      isOverlay: "ContentOverlayClose",
    };
  }

  MenuClick = () => {
    if (this.state.isOpen === "sideNavOpen") {
      this.setState({
        isOpen: "sideNavClose",
        isOverlay: "ContentOverlayClose",
      });
    } else {
      this.setState({
        isOpen: "sideNavOpen",
        isOverlay: "ContentOverlayOpen",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="navbar-wrapper">
          <Container
            fluid={"true"}
            className="fixed-top zindex shadow-sm p-2 mb-0 bg-white"
          >
            <Row className="align-items-center p-1 mt-1">
              <Col className="d-flex" lg={4} md={4} sm={12} xs={12}>
                <Button className="btn site-btn p-2" onClick={this.MenuClick}>
                  <i className="fa fa-bars"></i>
                </Button>
                <Link to="/">
                  <img className="nav-logo" src={logo} />
                </Link>

                <Link to="cart" className="cart-btn d-flex text-decoration-none justify-content-center align-items-center ms-auto">
                  <i className="fa fa-shopping-cart"></i>&nbsp; 3
                </Link>
              </Col>
            </Row>
          </Container>

          <div className={this.state.isOpen}>
            {/* <hr className="w-80" /> */}
            {/* <div className="list-group">
              <a
                href=""
                className="list-group-item nav-font nav-itemmenu list-group-item-action"
              >
                <i className="fa fa-home mr-2"></i>&nbsp; Home
              </a>
            </div> */}

            <MegaMenuMobile />
          </div>

          <div className={this.state.isOverlay}></div>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuMobile;
