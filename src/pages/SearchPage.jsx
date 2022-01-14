import axios from "axios";
import React, { Component, Fragment } from "react";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import SearchResult from "../components/ProductDetails/SearchResult";

export class SearchPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      searchkey: match.params.search, //this math.params.search name search come from AppRouter.js
      product: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(AppURL.searchItem(this.state.searchkey))
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
        <SearchResult
          data={this.state.product}
          searchkey={this.state.searchkey}
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

export default SearchPage;
