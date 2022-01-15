import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppURL from "../../api/AppURL";
import forget from "../../assets/images/forget.jpg";

export class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: "",
      isSent: false,
    };
  }

  forget = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
    };
    // if (email === "" || password === "") {
    //   this.setState({
    //     message: "Please fill all the fields",
    //   });
    // } else {
    //   this.props.userlogin(email, password);
    // }
    axios
      .post(AppURL.forget_password, data)
      .then((res) => {
        toast.success(
          "Password reset link has been sent to your email. Please check your email.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );

        this.setState({
          isSent: true,
        });
      })
      .catch((err) => {
        toast.error(
          "Soemthing went wrong. Please check your email.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  };

  render() {
    return (
      <Fragment>
        <Container className="">
          <Row className="justify-content-center">
            <Col
              md={12}
              lg={12}
              sm={12}
              xs={12}
              className="shadow-sm bg-white m-4"
            >
              <Row>
                <Col
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                  className="d-flex justify-content-center"
                >
                  <Form className="onboardForm" onSubmit={this.forget}>
                    <div className="section-title text-center mb-55 text-uppercase">
                      <h2>Forget your password?</h2>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={(e) => {
                          e.preventDefault();
                          this.setState({
                            email: e.target.value,
                          });
                        }}
                        required
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="site-btn site-btn-login mb-3"
                    >
                      Submit
                    </Button>

                    <p>
                      <Link to="/register" className="mb-2">
                        Don't have an account? Signup Here
                      </Link>
                    </p>
                  </Form>
                </Col>
                <Col className="p-0 m-0 desktop" md={6} lg={6} sm={12} xs={12}>
                  <img
                    src={forget}
                    alt="Login Image"
                    className="onboardBanner"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default ForgetPassword;
