import React, { Component, Fragment } from 'react'
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Notification from "../components/notification/Notification";

export class NotificationPage extends Component {
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
            <Notification />
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

export default NotificationPage
