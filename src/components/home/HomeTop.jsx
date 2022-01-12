import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import axios from "axios";
import AppURL from "../../api/AppURL";
import SliderLoading from "../placeholder/SliderLoading";

export class HomeTop extends Component {
  constructor() {
    super();
    this.state = {
      menuData: [],
      slider: [],
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
      .catch((error) => {
        console.log(error);
      });

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
              <Col lg={3} md={3} sm={12}>
                <MegaMenu data={this.state.menuData} />
              </Col>
              <Col lg={9} md={9} sm={12} className="p-0">
                <HomeSlider sliderImages={this.state.slider} />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default HomeTop;
