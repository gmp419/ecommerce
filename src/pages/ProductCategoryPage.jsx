import axios from "axios";
import React, { Component, Fragment } from "react";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Category from "../components/ProductDetails/Category";

export class ProductCategoryPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      category: match.params.category,
      product: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(AppURL.getCategoriesByCategory(this.state.category))
      .then((res) => {
        this.setState({
          product: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Fragment>
        <div className="desktop">
          <NavMenuDesktop />
        </div>
        <div className="mobile">
          <NavMenuMobile />
        </div>
        <Category category={this.state.category} data={this.state.product} />
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

export default ProductCategoryPage;
