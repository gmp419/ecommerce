import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import HomeSlider from "./HomeSlider";

export class HomeTopMobile extends Component {
  constructor() {
    super();
    this.state = {
      slider: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.getSliderImages)
      .then((response) => {
        this.setState({ slider: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="p-0 m-0 overflow-hidden">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <HomeSlider sliderImages={this.state.slider} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default HomeTopMobile;
