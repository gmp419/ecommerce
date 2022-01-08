import React, { Component, Fragment } from 'react'
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Favourite from '../components/favourite/Favourite';

export class FavouritePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
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
            <Favourite/>
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

export default FavouritePage
