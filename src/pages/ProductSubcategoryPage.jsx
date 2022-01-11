import axios from "axios";
import React, { Component, Fragment } from "react";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Subcategory from "../components/ProductDetails/Subcategory";

export class ProductSubcategoryPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      category: match.params.category,
      subcategory: match.params.subcategory,
      product: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(
        AppURL.getCategoriesBySubcategory(
          this.state.category,
          this.state.subcategory
        )
      )
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
        <Subcategory
          category={this.state.category}
          subcategory={this.state.subcategory}
          data={this.state.product}
        />
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

export default ProductSubcategoryPage;
