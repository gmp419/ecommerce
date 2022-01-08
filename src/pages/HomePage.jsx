import React, { Component, Fragment } from "react";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HomeTop from "../components/home/HomeTop";
import HomeTopMobile from "../components/home/HomeTopMobile";
import NewArrival from "../components/home/NewArrival";
import axios from "axios";

export class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.getVisitors();
  }

  getVisitors = () => {
    axios
      .get(AppURL.getVisitors)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <div className="desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>
        <div className="mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>
        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />
        <div className="desktop">
          <FooterDesktop />
        </div>
        <div className="mobile">
          <FooterMobile />
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
