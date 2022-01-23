import React, { Component, Fragment } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

export class Profile extends Component {
  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to={"/login"} />;
    }

    let name = this.props.name;
    let email = this.props.email;
    let profile_pic = this.props.profile_pic;
    let updated_at = this.props.updated;

    return (
      <Fragment>
        <Container className="p-4" style={{ marginBottom: "50px" }}>
          <div className="section-title text-center mb-55">
            <h2>User details</h2>
          </div>
          <Row className="justify-content-center">
            <Col md={3} lg={3} sm={12} xs={12} className="shadow-sm">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={profile_pic} />
              </Card>
            </Col>
            <Col md={9} lg={9} sm={12} xs={12} className="shadow-sm">
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  <h6>{email}</h6>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Link to="/orders" className="text-decoration-none text-xxl-start">Order history</Link>
                </ListGroupItem>
                {/* <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
              </ListGroup>
              <Card.Body>
                <Link to="/forget-password">
                  <Card.Link>Forget Password?</Card.Link>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted shadow-lg">
                {updated_at}
              </Card.Footer>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Profile;
