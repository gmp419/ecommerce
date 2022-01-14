import React, { Component, Fragment } from "react";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import login from "../../assets/images/login.png";

export class UserLogin extends Component {

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
                  <Form className="onboardForm">
                    <div className="section-title text-center mb-55 text-uppercase">
                      <h2>Login Here</h2>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="site-btn site-btn-login mb-3"
                    >
                      Login
                    </Button>
                    <p>
                      <Link to="/forget-password" className="mb-1">Forget Password?</Link>
                    </p>
                    <p>
                      <Link to="/register" className="mb-2">Don't have an account? Signup Here</Link>
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
      </Fragment>
    );
  }
}

export default UserLogin;
