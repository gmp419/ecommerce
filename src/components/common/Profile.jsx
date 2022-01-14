import React, { Component, Fragment } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export class Profile extends Component {
  render() {
    return (
      <Fragment>
        <Container >
        <Row className="justify-content-center">
            <Col
              md={12}
              lg={12}
              sm={12}
              xs={12}
              className="shadow-sm m-4"
            >
            {/* <Card> */}
              <Card.Header className="section-title my-2 p-2">User profile page</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Name: </ListGroup.Item>
                <ListGroup.Item>Email:</ListGroup.Item>
              </ListGroup>
            {/* </Card> */}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Profile;
