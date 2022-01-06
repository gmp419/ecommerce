import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      arrows: true,
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
              <div>
                <Card className="image-box card ">
                  <img
                    src="https://rukminim1.flixcart.com/image/751/901/kkh6zrk0/watch/n/t/2/new-stylish-dial-black-pu-strap-watch-for-men-crab-original-imafztfca8azrfxx.jpeg?q=50"
                    alt=""
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      iPhone, USB-C to Lightning Cable
                    </p>
                    <p className="product-price-on-card">$1,000.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card ">
                  <img
                    src="https://rukminim1.flixcart.com/image/751/901/kmz7qfk0/watch/i/2/9/new-stylish-dial-blue-pu-strap-watch-for-men-crab-original-imagfr7s7mh5yr3y.jpeg?q=50"
                    alt=""
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      iPhone, USB-C to Lightning Cable
                    </p>
                    <p className="product-price-on-card">$1,000.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card ">
                  <img
                    src="https://rukminim1.flixcart.com/image/751/901/kkh6zrk0/watch/n/t/2/new-stylish-dial-black-pu-strap-watch-for-men-crab-original-imafztfca8azrfxx.jpeg?q=50"
                    alt=""
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      iPhone, USB-C to Lightning Cable
                    </p>
                    <p className="product-price-on-card">$1,000.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card ">
                  <img
                    src="https://rukminim1.flixcart.com/image/751/901/kkh6zrk0/watch/n/t/2/new-stylish-dial-black-pu-strap-watch-for-men-crab-original-imafztfca8azrfxx.jpeg?q=50"
                    alt=""
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      iPhone, USB-C to Lightning Cable
                    </p>
                    <p className="product-price-on-card">$1,000.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card ">
                  <img
                    src="https://rukminim1.flixcart.com/image/751/901/kkh6zrk0/watch/n/t/2/new-stylish-dial-black-pu-strap-watch-for-men-crab-original-imafztfca8azrfxx.jpeg?q=50"
                    alt=""
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      iPhone, USB-C to Lightning Cable
                    </p>
                    <p className="product-price-on-card">$1,000.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card ">
                  <img
                    src="https://rukminim1.flixcart.com/image/751/901/kkh6zrk0/watch/n/t/2/new-stylish-dial-black-pu-strap-watch-for-men-crab-original-imafztfca8azrfxx.jpeg?q=50"
                    alt=""
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      iPhone, USB-C to Lightning Cable
                    </p>
                    <p className="product-price-on-card">$1,000.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card ">
                  <img
                    src="https://rukminim1.flixcart.com/image/751/901/kkh6zrk0/watch/n/t/2/new-stylish-dial-black-pu-strap-watch-for-men-crab-original-imafztfca8azrfxx.jpeg?q=50"
                    alt=""
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      iPhone, USB-C to Lightning Cable
                    </p>
                    <p className="product-price-on-card">$1,000.00</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card ">
                  <img
                    src="https://rukminim1.flixcart.com/image/751/901/kkh6zrk0/watch/n/t/2/new-stylish-dial-black-pu-strap-watch-for-men-crab-original-imafztfca8azrfxx.jpeg?q=50"
                    alt=""
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      iPhone, USB-C to Lightning Cable
                    </p>
                    <p className="product-price-on-card">$1,000.00</p>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
