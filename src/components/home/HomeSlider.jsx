import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class HomeSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
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

    const images = this.props.sliderImages;

    const view = images.map((image , index) => {
      return (
        <div key={index}>
          <img src={image.slider_image} alt="slider image" className="slider-img" />
        </div>
      );
    })

    return (
      
      <div>
        <Slider {...settings}>
          {view}
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;
