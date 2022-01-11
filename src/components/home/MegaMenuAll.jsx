import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";

export class MegaMenuAll extends Component {
  constructor(props) {
    super(props);
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
          <button onClick={this.menuClick} className="accordionAll">
            <img
              src={item.category_image}
              className="accordionMenuIconAll"
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
                      onClick={()=> window.location.href = "/allsubcategory/"+item.category_name+"/"+subitem.subcategory_name}
                      to={
                        "/allsubcategory/" +
                        item.category_name +
                        "/" +
                        subitem.subcategory_name
                      }
                      className={"accordionItem "}
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
      <>
        <div className="accordionMenuDivAll">
          <div className="accordionMenuDivInsideAll">{menu}</div>
        </div>
      </>
    );
  }
}

export default MegaMenuAll;
