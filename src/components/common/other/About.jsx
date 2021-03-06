import axios from "axios";
import React, { Component, Fragment } from "react";
import { Breadcrumb, Col, Container, Form, Row } from "react-bootstrap";
import AppURL from "../../../api/AppURL";
import parse from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: "",
      loading: "",
      display: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.siteInfo)
      .then((res) => {
        if (res.status == 200) {
          this.setState({
            about: res.data.about,
            loading: "d-none",
            display: "",
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
        <Container className="p-4">
          <div className="breadBody m-0">
            <Breadcrumb className="m-0">
              <Breadcrumb.Item className="m-0">
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="m-0">About</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="justify-content-center">
            <Col
              md={12}
              lg={12}
              sm={12}
              xs={12}
              className="shadow-sm bg-white m-4"
            >
              <div className={this.state.loading}>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-picture"></div>
                    <div className="ph-row">
                      <div className="ph-col-6 big"></div>
                      <div className="ph-col-4 empty big"></div>
                      <div className="ph-col-2 big"></div>
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={this.state.display}>
                <h1 className="fw-lighter py-3">About us</h1>
                <p className="section-sub-title">{parse(this.state.about)}</p>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default About;
