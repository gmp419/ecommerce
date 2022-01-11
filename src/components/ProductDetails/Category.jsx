import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const res_data = this.props.data;
    const category = this.props.category;

    const view = res_data.map((item, index) => {
      if (item.offer_price == "na") {
        return (
          <Col key={index} xl={3} lg={3} md={3} sm={6} xs={6} className="p-0">
            <Card className="image-box card w-100">
              <img src={item.product_image} alt="" className="center w-75" />
              <Card.Body>
                <p className="product-name-on-card">{item.title}</p>
                <p className="product-price-on-card">$&nbsp;{item.price}</p>
              </Card.Body>
            </Card>
          </Col>
        );
      } else {
        return (
          <Col xl={3} lg={3} md={3} sm={6} xs={6} className="p-0" key={index}>
            <Card className="image-box card w-100">
              <img src={item.product_image} alt="" className="center w-75" />
              <Card.Body>
                <p className="product-name-on-card">{item.title}</p>
                <p className="product-price-on-card">
                  Price: &nbsp;
                  <strike className="text-secondary">
                    $&nbsp;{item.price}
                  </strike>{" "}
                  $&nbsp;{item.offer_price}
                </p>
              </Card.Body>
            </Card>
          </Col>
        );
      }
    });
    return (
      <Fragment>
        <Container className="text-center p-5" fluid={true}>
          <div className="section-title text-center mb-55 text-uppercase mt-0">
            <h2 className="text-uppercase">{category}</h2>
          </div>
          <Row>{view}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default Category;
