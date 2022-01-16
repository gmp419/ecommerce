import axios from "axios";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";

export class SuggestedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }
  

  componentDidUpdate() {
    let subcategory = this.props.data;
    axios
      .get(AppURL.similarProduct(subcategory))
      .then((res) => {
        this.setState({
          product: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
   }

  render() {
    const res_data = this.state.product;

    if (res_data.length > 0) {
      const view = res_data.map((item, index) => {
        if (item.offer_price == "na") {
          return (
            <Col
              key={1}
              xl={2}
              lg={2}
              md={2}
              sm={4}
              xs={6}
              className="p-1"
              key={index}
            >
              <Link
                to={"/productdetails/" + item.id}
                className="text-decoration-none"
              >
                <Card className="image-box card ">
                  <img
                    src={item.product_image}
                    alt="product-image"
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">{item.title}</p>
                    <p className="product-price-on-card">$&nbsp;{item.price}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        } else {
          return (
            <Col
              key={1}
              xl={2}
              lg={2}
              md={2}
              sm={4}
              xs={6}
              className="p-1"
              key={index}
            >
              <Link
                to={"/productdetails/" + item.id}
                className="text-decoration-none"
              >
                <Card className="image-box card ">
                  <img
                    src={item.product_image}
                    alt="product-image"
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">{item.title}</p>
                    <p className="product-price-on-card">
                      <strike className="text-secondary">
                        $&nbsp;{item.price}
                      </strike>{" "}
                      $&nbsp;{item.offer_price}
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        }
      });
      return (
        <Fragment>
          <Container className="text-center p-4 mb-4" fluid={true}>
            <div className="section-title text-center mb-55 text-uppercase">
              <h2>You may also like</h2>
              <p className="text-capitalize">
                Some of Our Exclusive Collection, You May Like
              </p>
            </div>
            <Row>{view}</Row>
          </Container>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Container className="text-center p-4 mb-4" fluid={true}>
            <div className="section-title text-center mb-55 text-uppercase">
              <h2>You may also like</h2>
              <p className="text-capitalize">
                Some of Our Exclusive Collection, You May Like
              </p>
            </div>
          </Container>
        </Fragment>
      );
    }
  }
}

export default SuggestedProduct;
