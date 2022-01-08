import axios from "axios";
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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppURL from "../../api/AppURL";
import validation from "../../validation/validation";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      contact_number: "",
      message: "",
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);

    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    let contact_number = this.state.contact_number;
    let submit = document.getElementById("contact-submit");
    let contactForm = document.getElementById("contactForm");

    if (!validation.NameRegx.test(this.state.name)) {
      toast.error("Please enter a valid name", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      submit.innerHTML = "Sending...";
      let MyFormData = new FormData();
      MyFormData.append("name", name);
      MyFormData.append("email", email);
      MyFormData.append("message", message);
      MyFormData.append("contact_number", contact_number);

      axios
        .post(AppURL.contact_us, MyFormData)
        .then((res) => {
          if (res.status == 200) {
            console.log(res);
            toast.success(
              "Thank you for contacting us. We will get back to you soon!",
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
            submit.innerHTML = "Sent successfully!";
            contactForm.reset();
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
  };

  render() {
    return (
      <Fragment>
        <Container className="">
          <Row className="justify-content-evenly">
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
                  className="d-flex justify-content-evenly"
                >
                  <Form
                    className="onboardForm"
                    id="contactForm"
                    onSubmit={this.submitForm}
                  >
                    <h1 className="fw-light mb-3">Contact Us</h1>

                    <Form.Group className="mb-3" controlId="">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
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

                    <Form.Group className="mb-3" controlId="">
                      <Form.Control
                        type="name"
                        name="name"
                        required
                        placeholder="Enter name"
                        onChange={(e) => {
                          e.preventDefault();
                          this.setState({ name: e.target.value });
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Control
                        type="number"
                        name="contact_number"
                        placeholder="Enter Phone number"
                        onChange={(e) => {
                          e.preventDefault();
                          this.setState({ contact_number: e.target.value });
                        }}
                      />
                    </Form.Group>

                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Comments"
                    >
                      <Form.Control
                        as="textarea"
                        name="message"
                        required
                        placeholder="Leave a comment here"
                        onChange={(e) => {
                          e.preventDefault();
                          this.setState({ message: e.target.value });
                        }}
                        style={{ height: "100px", marginBottom: "12px" }}
                      />
                    </FloatingLabel>

                    <Button
                      variant="primary"
                      type="submit"
                      className="site-btn site-btn-login"
                      id="contact-submit"
                    >
                      Submit
                    </Button>
                  </Form>
                </Col>
                <Col
                  className="p-0 m-0 desktop d-flex justify-content-evenly"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.2014840153224!2d-63.102965484292824!3d46.226337779117316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52548cd6629f%3A0x34b939463165d2e7!2s16%20Glen%20Stewart%20Dr%2C%20Stratford%2C%20PE!5e0!3m2!1sen!2sca!4v1641521988558!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    styles="border:0;"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
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

export default Contact;
