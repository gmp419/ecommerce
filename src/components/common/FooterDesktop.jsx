import React, { Component, Fragment } from "react";
import { Col, Container, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Google from "../../assets/images/google.png";
import Apple from "../../assets/images/apple.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import parse from "html-react-parser";

export class FooterDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      android_app_link: "",
      ios_app_link: "",
      facebook_link: "",
      twitter_link: "",
      instagram_link: "",
      copyright_text: "",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.siteInfo)
      .then((res) => {
        if (res.status == 200) {
          this.setState({
            address: res.data.address,
            android_app_link: res.data.android_app_link,
            ios_app_link: res.data.ios_app_link,
            facebook_link: res.data.facebook_link,
            twitter_link: res.data.twitter_link,
            instagram_link: res.data.instagram_link,
            copyright_text: res.data.copyright_text,
          });
        } else {
          toast.error("Something went wrong. Please try again later!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Fragment>
        <div className="footerback shadow-sm m-0 p-5">
          <Container>
            <Row className="px-o">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="text-capitalize footer-menu-title">Address</h5>
                <p>{parse(this.state.address)}</p>
                <a href={parse(this.state.facebook_link)}>
                  <i className="fab fa-facebook m-1 h4"></i>
                </a>
                <a href={parse(this.state.twitter_link)}>
                  <i className="fab fa-instagram m-1 h4"></i>
                </a>
                <a href={parse(this.state.twitter_link)}>
                  <i className="fab fa-twitter m-1 h4"></i>
                </a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="text-capitalize footer-menu-title">Link</h5>
                <Link to="/about-us" className="footer-link">
                  About us
                </Link>
                <br />
                <Link to="/" className="footer-link">
                  Our Profile
                </Link>
                <br />
                <Link to="/contact" className="footer-link">
                  Contact us
                </Link>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="text-capitalize footer-menu-title">
                  Knowledge Base
                </h5>
                <Link to="/purchase" className="footer-link">
                  How to purchase?
                </Link>
                <br />
                <Link to="/privacy" className="footer-link">
                  Privacy policy
                </Link>
                <br />
                <Link to="/refund" className="footer-link">
                  Ask for refund?
                </Link>
                <div className="footer-link">
                  Change language?
                  <div id="google_translate_element" className="mt-2"></div>
                </div>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="text-capitalize footer-menu-title">
                  Ecommerce App
                </h5>
                <a href={parse(this.state.android_app_link)}>
                  <img src={Google} alt="Google App Icon" />
                </a>
                <a href={parse(this.state.ios_app_link)}>
                  <img src={Apple} className="mt-2" alt="Apple App Icon" />
                </a>
              </Col>
            </Row>
          </Container>
          <Container className="text-center">
            <Row className="p-2 m-0">
              <h6 className="fw-light">{parse(this.state.copyright_text)}</h6>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterDesktop;
