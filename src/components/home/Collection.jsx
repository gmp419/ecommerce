import axios from "axios";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";
import CollectionLoading from "../placeholder/CollectionLoading";

export class Collection extends Component {
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
      .get(AppURL.getCategoriesByRemark("collection"))
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
    const collection_product = this.state.product;

    const product = collection_product.map((item, index) => {
      if (item.offer_price === "na") {
        return (
          <Col key={index} xl={3} lg={3} md={3} sm={6} xs={6} className="p-0">
            <Link
              to={"/productdetails/" + item.id}
              className="text-decoration-none"
            >
              <Card className="image-box card w-100">
                <img src={item.product_image} alt="" className="center w-75" />
                <Card.Body>
                  <p className="product-name-on-card">{item.title}</p>
                  <p className="product-price-on-card">$&nbsp;{item.price}</p>
                </Card.Body>
              </Card>{" "}
            </Link>
          </Col>
        );
      } else {
        return (
          <Col key={index} xl={3} lg={3} md={3} sm={6} xs={6} className="p-0">
            <Link
              to={"/productdetails/" + item.id}
              className="text-decoration-none"
            >
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
            </Link>
          </Col>
        );
      }
    });
    return (
      <Fragment>
        <CollectionLoading isLoading={this.state.loading} />
        <div className={this.state.display}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55 text-uppercase">
              <h2 className="text-uppercase">Product Collection</h2>
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

export default Collection;
