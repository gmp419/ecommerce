import axios from "axios";
import React, { Component, Fragment } from "react";
import { Spinner } from "react-bootstrap";
import AppURL from "../api/AppURL";
import Contact from "../components/common/Contact";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import ProductDetail from "../components/ProductDetails/ProductDetail";
import SuggestedProduct from "../components/ProductDetails/SuggestedProduct";

export class ProductDetailsPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      code: match.params.code,
      product: [],
      loading: "",
      display: "d-none",
      suggestProduct: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(AppURL.getProductDetails(this.state.code))
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

  // UNSAFE_componentWillMount() {
    

  //   axios
  //   .get(AppURL.similarProduct("samsung"))
  //   .then((res) => {
  //     this.setState({
  //       suggestProduct: res.data,
  //     });
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }
  render() {
    let productAllData = this.state.product;
    let subcategory = productAllData["productList"]
    ? productAllData["productList"][0]["subcategory"]
    : "";
    
    return (
      <Fragment>
        <div className="desktop">
          <NavMenuDesktop />
        </div>
        <div className="mobile">
          <NavMenuMobile />
        </div>
        <div className={this.state.loading}>
          <Spinner animation="border" role="status"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              height: "100px",
              width: "100px",
              marginTop: "-50px",
              marginLeft: "-50px",
              backgroundSize: '100%',
            }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        <div className={this.state.display}>
          <ProductDetail data={this.state.product} />
          {/* <SuggestedProduct data={subcategory} /> */}
        </div>
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

export default ProductDetailsPage;
