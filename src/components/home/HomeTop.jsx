import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import axios from "axios";
import AppURL from "../../api/AppURL";

export class HomeTop extends Component {
  constructor() {
    super();
    this.state = {
      menuData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.getCategories)
      .then((response) => {
        this.setState({ menuData: response.data });
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="p-0 m-0 overflow-hidden">
          <Row>
            <Col lg={3} md={3} sm={12}>
              <MegaMenu data={this.state.menuData} />
            </Col>
            <Col lg={9} md={9} sm={12} className="p-0">
              <HomeSlider />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default HomeTop;
