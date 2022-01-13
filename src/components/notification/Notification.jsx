import axios from "axios";
import React, { Component, Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Badge,
  Spinner,
} from "react-bootstrap";
import { flushSync } from "react-dom";
import AppURL from "../../api/AppURL";

export class Norification extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      data: [],
      loading: "",
      display: "d-none",
      Notificationmsg: "",
      Notificationtitle: "",
      Notificationdate: "",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    axios
      .get(AppURL.notification)
      .then((res) => {
        this.setState({
          data: res.data,
          loading: "d-none",
          display: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = (event) => {
    let Nmsg = event.target.getAttribute("data-message");
    let Ntitle = event.target.getAttribute("data-title");
    let Ndate = event.target.getAttribute("data-date");
    this.setState({
      show: true,
      Notificationmsg: Nmsg,
      Notificationtitle: Ntitle,
      Notificationdate: Ndate,
    });
  };

  render() {
    const info = this.state.data;

    const notification = info.map((item, index) => {
      return (
        <Col className=" p-1 " md={6} lg={6} sm={12} xs={12} key={index}>
          <Card className="notification-card">
            <Card.Body>
              <h6>{item.title} </h6>
              <p className="py-1 px-0 text-primary m-0">
                <i className="fa fa-bell"></i> Date: {item.date} | Status:&nbsp;
                <span className="badge bg-success">{item.status}</span>
              </p>
              <button
                className="btn btn-sm btn-light float-right cursor-pointer mt-1"
                data-title={item.title}
                data-message={item.description}
                data-date={item.date}
                onClick={this.handleShow}
              >
                Read More
              </button>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="p-4 ">
        <div className={this.state.loading}>
          <Spinner animation="border" role="status"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              height: "100px",
              width: "100px",
              marginTop: "-50px",
              marginLeft: "-50px",
              backgroundSize: '100%',
            }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        <div className={this.state.display}>
          <Row>{notification}</Row>
        </div>
        </Container>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className="zindex"
        >
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date:{this.state.Notificationdate}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>{this.state.Notificationtitle}</h6>
            <p>{this.state.Notificationmsg}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Norification;
