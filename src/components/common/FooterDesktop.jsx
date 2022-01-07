import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Google from "../../assets/images/google.png";
import Apple from "../../assets/images/apple.png";

export class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback shadow-sm m-0 p-5">
          <Container>
            <Row className="px-o">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="text-uppercase footer-menu-title">
                  Office Address
                </h5>
                <p>
                  16 Glen Strwaer Dr,
                  <br /> Stratford, PE C1B 2B1
                </p>
                <p>Email: support@ecommerce.com</p>
                <a href="">
                  <i className="fab fa-facebook m-1 h4"></i>
                </a>
                <a href="">
                  <i className="fab fa-instagram m-1 h4"></i>
                </a>
                <a href="">
                  <i className="fab fa-twitter m-1 h4"></i>
                </a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="text-uppercase footer-menu-title">Link</h5>
                <Link to="/" className="footer-link">
                  About us
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Our Profile
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Contact us
                </Link>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="text-uppercase footer-menu-title">Link</h5>
                <Link to="/" className="footer-link">
                  About us
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Our Profile
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Contact us
                </Link>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="text-uppercase footer-menu-title">
                  Ecommerce App
                </h5>
                <a href="">
                  <img src={Google} alt="Google App Icon" />
                </a>
                <a href="">
                  <img src={Apple} className="mt-2" alt="Apple App Icon" />
                </a>
              </Col>
            </Row>
          </Container>
          <Container className="text-center">
            <Row className="p-2 m-0">
              <h6 className="fw-light">
                © 2022 Ecommerce. All Rights Reserved.
              </h6>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterDesktop;
