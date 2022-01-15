import React, { Component, Fragment } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Redirect } from "react-router";

export class Profile extends Component {
 
  render() {

    if(!localStorage.getItem('token')){
      return <Redirect to={"/login"} />;
    }

    let name = this.props.name;
    let email = this.props.email;

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
                <ListGroup.Item>Name: {name}</ListGroup.Item>
                <ListGroup.Item>Email: {email} </ListGroup.Item>
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
