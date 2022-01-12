import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import FeaturedLoading from "../placeholder/FeaturedLoading";

export class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      loading: "",
      display: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.getCategoriesByRemark("featured"))
      .then((res) => {
        this.setState({
          product: res.data,
          loading: "d-none",
          display: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const featured_product = this.state.product;

    const product = featured_product.map((item, index) => {
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
            <Link to="productdetails" className="text-decoration-none">
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
            <Link to="productdetails" className="text-decoration-none">
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
        <FeaturedLoading isLoading={this.state.loading} />
        <div className={this.state.display}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55 text-uppercase">
              <h2>FEATURED PRODUCT</h2>
              <p className="text-capitalize">
                Some of Our Exclusive Collection, You May Like
              </p>
            </div>
            <Row>{product}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
