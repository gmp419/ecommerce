import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export class SuggestedProduct extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center p-4 mb-4" fluid={true}>
          <div className="section-title text-center mb-55 text-uppercase">
            <h2>You may also like</h2>
            <p className="text-capitalize">
              Some of Our Exclusive Collection, You May Like
            </p>
          </div>
          <Row>
            <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6} className="p-1">
              <Link to="productdetails" className="text-decoration-none">
                <Card className="image-box card ">
                  <img
                    src="https://rukminim1.flixcart.com/image/832/832/kg8avm80/mobile/n/p/d/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwyzztfnh.jpeg?q=70"
                    alt=""
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      iPhone, USB-C to Lightning Cable
                    </p>
                    <p className="product-price-on-card">$1,000.00</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6} className="p-1">
              <Card className="image-box card ">
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/kg8avm80/mobile/n/p/d/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwyzztfnh.jpeg?q=70"
                  alt=""
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    iPhone, USB-C to Lightning Cable
                  </p>
                  <p className="product-price-on-card">$1,000.00</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6} className="p-1">
              <Card className="image-box card ">
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/kg8avm80/mobile/n/p/d/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwyzztfnh.jpeg?q=70"
                  alt=""
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    iPhone, USB-C to Lightning Cable
                  </p>
                  <p className="product-price-on-card">$1,000.00</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6} className="p-1">
              <Card className="image-box card ">
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/kg8avm80/mobile/n/p/d/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwyzztfnh.jpeg?q=70"
                  alt=""
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    iPhone, USB-C to Lightning Cable
                  </p>
                  <p className="product-price-on-card">$1,000.00</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6} className="p-1">
              <Card className="image-box card ">
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/kg8avm80/mobile/n/p/d/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwyzztfnh.jpeg?q=70"
                  alt=""
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    iPhone, USB-C to Lightning Cable
                  </p>
                  <p className="product-price-on-card">$1,000.00</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6} className="p-1">
              <Card className="image-box card ">
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/kg8avm80/mobile/n/p/d/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwyzztfnh.jpeg?q=70"
                  alt=""
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    iPhone, USB-C to Lightning Cable
                  </p>
                  <p className="product-price-on-card">$1,000.00</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SuggestedProduct;
