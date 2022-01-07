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
export class Purchase extends Component {
  render() {
    return (
      <Fragment>
        <Container className="d-flex">
          <Row className="justify-content-center">
            <Col
              md={12}
              lg={12}
              sm={12}
              xs={12}
              className="shadow-sm bg-white m-4"
            >
              <h1 className="fw-light mb-3">How to Puchase?</h1>
              <p className="section-sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minus ratione laudantium magni accusamus reprehenderit officia. Rem quam iste mollitia laborum inventore voluptatibus debitis fugiat autem magnam optio expedita magni nihil recusandae ad minus, nulla placeat ipsam labore necessitatibus voluptatem. Est ducimus nobis optio excepturi quaerat ratione blanditiis repudiandae qui tenetur, labore at quis natus dolore minus illo reiciendis, velit porro saepe, magnam voluptas aliquid ut numquam fugiat. Dolore impedit atque a vitae, quo voluptate, in ut aspernatur sunt debitis repellat enim repellendus sapiente magnam laboriosam eligendi. Harum dignissimos numquam laborum ea, accusantium, dolores, tempore eaque quidem voluptate illum molestias.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Purchase;
