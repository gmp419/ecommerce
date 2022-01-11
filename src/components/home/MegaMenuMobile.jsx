import axios from "axios";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AppURL from "../../api/AppURL";

export class MegaMenuMobile extends Component {
  // constructor(props) {
  //   super(props);
  //   this.megamenu = this.megamenu.bind(this);
  // }

  // componentDidMount() {
  //   this.megamenu();
  // }

  // megamenu() {
  //   var acc = document.getElementsByClassName("accordionMobile");
  //   var accNum = acc.length;
  //   for (var i = 0; i < accNum; i++) {
  //     acc[i].addEventListener("click", function () {
  //       this.classList.toggle("active");
  //       var panel = this.nextElementSibling;
  //       if (panel.style.maxHeight) {
  //         panel.style.maxHeight = null;
  //       } else {
  //         panel.style.maxHeight = panel.scrollHeight + "px";
  //       }
  //     });
  //   }
  // }
  constructor() {
    super();
    this.state = {
      menuData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.getCategories)
      .then((response) => {
        this.setState({ menuData: response.data });
      })
      .catch((error) => {});
  }

  menuClick = (event) => {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  render() {
    const catList = this.state.menuData;

    const menu = catList.map((item, index) => {
      return (
        <div key={index}>
          <button onClick={this.menuClick} className="accordionMobile">
            <img
              src={item.category_image}
              className="accordionMenuIconMobile"
              alt=""
            />
            &nbsp; {item.category_name}
          </button>
          <div className="panel">
            <ul className="my-2">
              {item.subcategory.map((subitem, subindex) => {
                return (
                  <li className="mb-1">
                    <Link
                      to={
                        "/allsubcategory/" +
                        item.category_name +
                        "/" +
                        subitem.subcategory_name
                      }
                      onClick={() => window.location.href = "/allsubcategory/"+item.category_name+"/"+subitem.subcategory_name}
                      className="accordionItemMobile"
                      key={subindex}
                    >
                      {subitem.subcategory_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">{menu}</div>
      </div>
    );
  }
}

export default MegaMenuMobile;
