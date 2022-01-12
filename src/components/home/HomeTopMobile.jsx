import axios from "axios";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import SliderLoading from "../placeholder/SliderLoading";
import HomeSlider from "./HomeSlider";

export class HomeTopMobile extends Component {
  constructor() {
    super();
    this.state = {
      slider: [],
      loading: "",
      display: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.getSliderImages)
      .then((response) => {
        this.setState({
          slider: response.data,
          loading: "d-none",
          display: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Fragment>
        <SliderLoading isLoading={this.state.loading} />
        <div className={this.state.display}>
          <Container fluid={true} className="p-0 m-0 overflow-hidden">
            <Row>
              <Col lg={12} md={12} sm={12}>
                <HomeSlider sliderImages={this.state.slider} />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default HomeTopMobile;
