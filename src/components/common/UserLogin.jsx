import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AppURL from "../../api/AppURL";
import login from "../../assets/images/login.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      login: false,
    };
  }

  userlogin = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    // if (email === "" || password === "") {
    //   this.setState({
    //     message: "Please fill all the fields",
    //   });
    // } else {
    //   this.props.userlogin(email, password);
    // }
    axios
      .post(AppURL.login, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        this.setState({
          login: true,
        });
      })
      .catch((err) => {
        toast.error(
          "Invalid Email or Password. Please try again with correct credentials",
          {
            position: "top-right",
          }
        );
      });
  };

  render() {
    if (this.state.login === true) {
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
                  <Form className="onboardForm" onSubmit={this.userlogin}>
                    <div className="section-title text-center mb-55 text-uppercase">
                      <h2>Login Here</h2>
                    </div>
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
                        name="password"
                        required
                        onChange={(e) => {
                          e.preventDefault();
                          this.setState({ password: e.target.value });
                        }}
                      />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button
                      variant="primary"
                      type="submit"
                      className="site-btn site-btn-login mb-3"
                    >
                      Login
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

export default UserLogin;
