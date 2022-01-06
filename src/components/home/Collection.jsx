import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55 text-uppercase">
            <h2 className="text-uppercase">Product Collection</h2>
            <p className="text-capitalize">
              Some of Our Exclusive Collection, You May Like
            </p>
          </div>
          <Row>
            <Col key={1} xl={3} lg={3} md={3} sm={6} xs={6} className="p-0">
              <Card className="image-box card w-100">
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/kv2pk7k0/racquet/w/r/r/g4-3-25-inches-graphite-999-full-graphite-30-lbs-strung-1-original-imag8fs7nzgzmzdc.jpeg?q=70"
                  alt="" 
                  className="center w-75"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    iPhone, USB-C to Lightning Cable
                  </p>
                  <p className="product-price-on-card">$1,000.00</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={3} lg={3} md={3} sm={6} xs={6} className="p-0">
              <Card className="image-box card w-100">
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/kv2pk7k0/racquet/w/r/r/g4-3-25-inches-graphite-999-full-graphite-30-lbs-strung-1-original-imag8fs7nzgzmzdc.jpeg?q=70"
                  alt="" 
                  className="center w-75"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    iPhone, USB-C to Lightning Cable
                  </p>
                  <p className="product-price-on-card">$1,000.00</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={3} lg={3} md={3} sm={6} xs={6} className="p-0">
              <Card className="image-box card w-100">
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/kv2pk7k0/racquet/w/r/r/g4-3-25-inches-graphite-999-full-graphite-30-lbs-strung-1-original-imag8fs7nzgzmzdc.jpeg?q=70"
                  alt="" 
                  className="center w-75"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    iPhone, USB-C to Lightning Cable
                  </p>
                  <p className="product-price-on-card">$1,000.00</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={3} lg={3} md={3} sm={6} xs={6} className="p-0">
              <Card className="image-box card w-100">
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/kv2pk7k0/racquet/w/r/r/g4-3-25-inches-graphite-999-full-graphite-30-lbs-strung-1-original-imag8fs7nzgzmzdc.jpeg?q=70"
                  alt="" 
                  className="center w-75"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    iPhone, USB-C to Lightning Cable
                  </p>
                  <p className="product-price-on-card">$1,000.00</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={3} lg={3} md={3} sm={6} xs={6} className="p-0">
              <Card className="image-box card w-100">
                <img
                  src="https://rukminim1.flixcart.com/image/832/832/kv2pk7k0/racquet/w/r/r/g4-3-25-inches-graphite-999-full-graphite-30-lbs-strung-1-original-imag8fs7nzgzmzdc.jpeg?q=70"
                  alt="" 
                  className="center w-75"
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

export default Collection;
