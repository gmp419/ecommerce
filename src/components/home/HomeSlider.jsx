import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../assets/images/slider/slider1.jpg";
import Slider2 from "../../assets/images/slider/slider2.jpg";
import Slider3 from "../../assets/images/slider/slider3.jpg";

export class HomeSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    //   arrows: true
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
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
      <div>
        <Slider {...settings}>
          <div>
            <img src={Slider1} alt="slider1" className="slider-img"/>
          </div>
          <div>
            <img src={Slider2} alt="slider2" className="slider-img"/>
          </div>
          <div>
            <img src={Slider3} alt="slider3" className="slider-img"/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;
