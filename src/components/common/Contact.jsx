import React, { Component, Fragment } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  Card,
  FloatingLabel,
} from "react-bootstrap";

export class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
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
                    <h1 className="fw-light mb-3">Contact Us</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Comments"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px", marginBottom: "12px" }}
                      />
                    </FloatingLabel>

                    <Button
                      variant="primary"
                      type="submit"
                      className="site-btn site-btn-login"
                    >
                      Submit
                    </Button>
                  </Form>
                </Col>
                <Col
                  className="p-0 m-0 desktop d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.2014840153224!2d-63.102965484292824!3d46.226337779117316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52548cd6629f%3A0x34b939463165d2e7!2s16%20Glen%20Stewart%20Dr%2C%20Stratford%2C%20PE!5e0!3m2!1sen!2sca!4v1641521988558!5m2!1sen!2sca"
                    width="600"
                    height="450"
                    styles="border:0;"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
