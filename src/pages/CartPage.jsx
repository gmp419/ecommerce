import axios from "axios";
import React, { Component, Fragment } from "react";
import AppURL from "../api/AppURL";
import Cart from "../components/cart/Cart";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router";

export class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      loading: "",
      display: "d-none",
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (localStorage.getItem("token") == null) {
      toast.error("Please Login First", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let user = localStorage.getItem("user");
      let email = JSON.parse(user).email;
      axios
        .get(AppURL.cartList(email))
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
        <Cart data = {this.state.product} />
        <ToastContainer />
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

export default CartPage;
