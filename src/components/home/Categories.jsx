import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AppURL from "../../api/AppURL";
import CategoryLoading from "../placeholder/CategoryLoading";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      menuData: [],
      loading: "",
      display: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.getCategories)
      .then((response) => {
        this.setState({
          menuData: response.data,
          loading: "d-none",
          display: "",
        });
      })
      .catch((error) => {});
  }
  render() {
    const catList = this.state.menuData;

    const menu = catList.map((item, index) => {
      return (
        <Col
          className="p-0"
          key={1}
          xl={2}
          lg={2}
          md={3}
          sm={6}
          xs={6}
          key={index}
        >
          <Link to={"/allcategory/" + item.category_name}>
            <Card className="h-100 w-100 text-center">
              <Card.Body>
                <img className="center" src={item.category_image} />
                <h5 className="category-name">{item.category_name}</h5>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });

    return (
      <Fragment>
        <CategoryLoading isLoading={this.state.loading} />
        <div className={this.state.display}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>CATEGORIES</h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>{menu}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Categories;
