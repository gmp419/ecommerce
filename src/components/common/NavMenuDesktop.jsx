import React, { Component, Fragment } from "react";
import {
  Button,
  Col,
  Container,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import logo from "../../assets/images/easyshop.png";
import { Link, Redirect } from "react-router-dom";
import MegaMenuAll from "../home/MegaMenuAll";

export class NavMenuDesktop extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isOpen: "sideNavClose",
      isOverlay: "ContentOverlayClose",
      searchResult: "",
      searchRedirect: false,
    };
    this.searchItem = this.searchItem.bind(this);
    this.searchOnClick = this.searchOnClick.bind(this);
    this.searchRedirect = this.searchRedirect.bind(this);
    this.MenuClick = this.MenuClick.bind(this);

  }

  searchItem = (e) => {
    this.setState({
      searchResult: e.target.value,
    });
  };

  searchOnClick = () => {
    if (this.state.searchResult.length > 0) {
      this.setState({
        searchRedirect: true,
      });
    }
  };

  searchRedirect = () => {
    if (this.state.searchRedirect === true) {
      return <Redirect to={"/search/" + this.state.searchResult} />; 
    }
  };


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
              {this.searchRedirect()}
              <Row className="align-items-center p-1 mt-1">
                <Col
                  className="d-inline-flex align-items-center"
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                >
                  <Button className="btn site-btn p-2" onClick={this.MenuClick}>
                    <i className="fa fa-bars"></i>
                  </Button>
                  <Link to="/" className="mb-0">
                    {" "}
                    <img className="nav-logo" src={logo} />{" "}
                  </Link>
                </Col>

                <Col className="" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.searchItem}
                    />
                    <Button
                      type="button"
                      className="btn site-btn"
                      onClick={this.searchOnClick}

                    >
                      <i className="fa fa-search"> </i>
                    </Button>
                  </div>
                </Col>

                <Col
                  className="d-flex align-items-center"
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                >
                  <Link to="/notification" className="btn mb-0">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <Link to="/favourite" className="btn mb-0">
                    <i className="fa h4 fa-heart"></i>
                    <sup>
                      <span className="badge text-white bg-danger">2</span>
                    </sup>
                  </Link>
                  
                  <Link to="/login" className="h4 btn mb-0">
                    LOGIN
                  </Link>
                  <span>|</span>
                  <Link to="/register" className="h4 btn mb-0">
                    REGISTER
                  </Link>

                  <Link
                    to="cart"
                    className="cart-btn mb-0 d-flex justify-content-center align-items-center text-decoration-none"
                  >
                    <i className="fa fa-shopping-cart"></i>&nbsp;3{" "}
                  </Link>
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
