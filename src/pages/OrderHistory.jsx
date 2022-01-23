import React, { Component, Fragment } from "react";
import { Redirect } from "react-router";
import Orders from "../components/cart/Orders";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

export class OrderHistory extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    if (!localStorage.getItem("token")) {
        return <Redirect to={"/login"} />;
      }
    return (
      <Fragment>
        <div className="desktop">
          <NavMenuDesktop />
        </div>
        <div className="mobile">
          <NavMenuMobile />
        </div>
        <Orders />
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

export default OrderHistory;
