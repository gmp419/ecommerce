import React, { Component, Fragment } from "react";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import forget from "../../assets/images/forget.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Redirect } from "react-router";

export class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      email: "",
      password: "",
      password_confirmation: "",
      message: "",
      isregister: false,
    };
  }

  // Reset Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      token: this.state.token,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post(AppURL.UserResetPassword, data)
      .then((response) => {

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        this.setState({
          isregister: true,
        });

        toast.success(this.state.message, {
          position: "top-right",
        });
        document.getElementById("fromreset").reset();
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message });
        toast.error(this.state.message, {
          position: "top-right",
        });
      });
  };
  render() {
    if (this.state.isregister === true) {
      return <Redirect to={"/profile"} />;
    }
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
                  <Form
                    className="onboardForm"
                    onSubmit={this.formSubmit}
                    id="fromreset"
                  >
                    <div className="section-title text-center mb-55 text-uppercase">
                      <h2>Reset your password</h2>
                    </div>

                    <Form.Group className="mb-3" controlId="token">
                      <Form.Label>PIN</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter PIN here"
                        required
                        onChange={(e) => {
                          this.setState({ token: e.target.value });
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => {
                          this.setState({ password: e.target.value });
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirm_password">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        required
                        onChange={(e) => {
                          this.setState({
                            password_confirmation: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="site-btn site-btn-login mb-3"
                    >
                      Confirm
                    </Button>
                    <p>
                      <Link to="/forget-password" className="mb-1">
                        Forget Password?
                      </Link>
                    </p>
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

export default ResetPassword;
