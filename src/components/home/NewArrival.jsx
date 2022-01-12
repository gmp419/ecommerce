import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppURL from "../../api/AppURL";
import axios from "axios";
import CollectionLoading from "../placeholder/CollectionLoading";
import NewArrivalLoading from "../placeholder/NewArrivalLoading";

export class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      loading: "",
      display: "d-none",
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    axios
      .get(AppURL.getCategoriesByRemark("new"))
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

  previous(e) {
    e.preventDefault();
    this.slider.slickPrev();
  }

  next(e) {
    e.preventDefault();
    this.slider.slickNext();
  }

  render() {
    const new_product = this.state.product;

    const product = new_product.map((item, index) => {
      if (item.offer_price == "na") {
        return (
          <div>
            <Card className="image-box card ">
              <img src={item.product_image} alt="" className="center" />
              <Card.Body>
                <p className="product-name-on-card">{item.title}</p>
                <p className="product-price-on-card">
                  Price:&nbsp;{item.price}
                </p>
              </Card.Body>
            </Card>
          </div>
        );
      } else {
        return (
          <div>
            <Card className="image-box card ">
              <img src={item.product_image} alt="" className="center" />
              <Card.Body>
                <p className="product-name-on-card">{item.title}</p>
                <p className="product-price-on-card">
                  Price: &nbsp;
                  <strike className="text-secondary">
                    $&nbsp;{item.price}
                  </strike>{" "}
                  $&nbsp;{item.offer_price}
                </p>{" "}
              </Card.Body>
            </Card>
          </div>
        );
      }
    });
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Fragment>
        <NewArrivalLoading isLoading={this.state.loading} />
        <div className={this.state.display}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55 text-uppercase">
              <h2>
                <a
                  href=""
                  className="btn btn-sm ml-2 site-btn"
                  onClick={this.previous}
                >
                  <i className="fa fa-angle-left"></i>
                </a>
                &nbsp; New Arrivals &nbsp;
                <a
                  href=""
                  className="btn btn-sm ml-2 site-btn"
                  onClick={this.next}
                >
                  <i className="fa fa-angle-right"></i>
                </a>
              </h2>
              <p className="text-capitalize">
                Some of Our Exclusive Collection, You May Like
              </p>
            </div>
            <Row>
              <Slider ref={(e) => (this.slider = e)} {...settings}>
                {product}
              </Slider>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default NewArrival;
