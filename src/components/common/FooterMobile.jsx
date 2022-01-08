import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Google from "../../assets/images/google.png";
import Apple from "../../assets/images/apple.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import parse from "html-react-parser";

export class FooterMobile extends Component {
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
              <Col className="p-2 " lg={3} md={3} sm={6} xs={12}>
                <h5 className="text-uppercase footer-menu-title">
                  Office Address
                </h5>
                <p>{parse(this.state.address)}</p>
                <a href={parse(this.state.facebook_link)}>
                  <i className="fab fa-facebook m-1 h4"></i>
                </a>
                <a href={parse(this.state.instagram_link)}>
                  <i className="fab fa-instagram m-1 h4"></i>
                </a>
                <a href={parse(this.state.twitter_link)}>
                  <i className="fab fa-twitter m-1 h4"></i>
                </a>
              </Col>

              <Col className="p-2 " lg={3} md={3} sm={6} xs={12}>
                <h5 className="text-uppercase footer-menu-title">
                  Ecommerce App
                </h5>
                <a href={parse(this.state.android_app_link)}>
                  <img src={Google} className="my-2" alt="Google App Icon" />
                </a>
                <a href={parse(this.state.ios_app_link)}>
                  <img src={Apple} className="my-2" alt="Apple App Icon" />
                </a>
              </Col>
              <Col className="p-2 " lg={12} md={12} sm={12} xs={12}>
                <h6 className="fw-light">{parse(this.state.copyright_text)}</h6>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterMobile;
