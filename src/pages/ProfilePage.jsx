import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Profile from "../components/common/Profile";
import { Redirect } from "react-router";


export class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      profile_pic: "",
      updated: "",
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (localStorage.getItem("user")) {
      this.setState({
        email: JSON.parse(localStorage.getItem("user")).email,
        name: JSON.parse(localStorage.getItem("user")).name,
        profile_pic: JSON.parse(localStorage.getItem("user")).profile_photo_url,
        updated: JSON.parse(localStorage.getItem("user")).updated_at,
      });
    }
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
        <Profile
          name={this.state.name}
          email={this.state.email}
          profile_pic={this.state.profile_pic}
          updated={this.state.updated}
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

export default ProfilePage;
