import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export class MegaMenu extends Component {
  constructor(props) {
    super();
    // this.menuClick = this.menuClick.bind(this);
  }

  // componentDidMount() {
  //   this.menuClick();
  // }

  // megamenu() {
  //   var acc = document.getElementsByClassName("accordion");
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
    const catList = this.props.data;

    const menu = catList.map((item, index) => {
      return (
        <div >
          <button onClick={this.menuClick} className="accordion" key={index}>
            <img
              src={item.category_image}
              className="accordionMenuIcon"
              alt=""
            />
            &nbsp; {item.category_name}
          </button>
          <div className="panel">
            <ul className="my-2">
              {
                item.subcategory.map((subitem, subindex) => { 
                  return(
                    <li className="mb-1">
                    <Link to={"/allsubcategory/"+item.category_name+"/"+subitem.subcategory_name} className="accordionItem" key={subindex}>
                      {subitem.subcategory_name}
                    </Link>
                  </li> 
                  )
                })
              }
            </ul>
          </div>
        </div>
      );
    });

    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">{menu}</div>
      </div>
    );
  }
}

export default MegaMenu;
