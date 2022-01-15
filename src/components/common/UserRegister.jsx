import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AppURL from "../../api/AppURL";
import login from "../../assets/images/login.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class UserRegister extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
      message: "",
      isregister: false,
    };
  }

  registerUser = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };
    // if (email === "" || password === "") {
    //   this.setState({
    //     message: "Please fill all the fields",
    //   });
    // } else {
    //   this.props.userlogin(email, password);
    // }
    axios
      .post(AppURL.register, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        this.setState({
          isregister: true,
        });
      })
      .catch((err) => {
        toast.error("Something went wrong. Please check your details", {
          position: "top-right",
        });
      });
  };
  render() {
    if (this.state.isregister === true) {
      console.log("redirecting");
      return <Redirect to={"/profile"} />;
    }

    if (localStorage.getItem("token")) {
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
                  <Form className="onboardForm" onSubmit={this.registerUser}>
                    <div className="section-title text-center mb-55 text-uppercase">
                      <h2>Register Here</h2>
                    </div>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Full name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Enter name"
                        name="name"
                        required
                        onChange={(e) => {
                          e.preventDefault();
                          this.setState({ name: e.target.value });
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        required
                        onChange={(e) => {
                          e.preventDefault();
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
                        name="password"
                        onChange={(e) => {
                          e.preventDefault();
                          this.setState({ password: e.target.value });
                        }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="password_confirmation"
                      name="password_confirmation"
                      required
                      onChange={(e) => {
                        e.preventDefault();
                        this.setState({
                          password_confirmation: e.target.value,
                        });
                      }}
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="site-btn site-btn-login mb-3"
                    >
                      Sign up
                    </Button>
                    <p>
                      <Link to="/forget-password" className="mb-1">
                        Forget Password?
                      </Link>
                    </p>
                    <p>
                      <Link to="/login" className="mb-2">
                        Already have an account? Login Here
                      </Link>
                    </p>
                  </Form>
                </Col>
                <Col className="p-0 m-0 desktop" md={6} lg={6} sm={12} xs={12}>
                  <img
                    src={login}
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

export default UserRegister;
