import React, { Component, Fragment } from "react";

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
        <div key={index}>
          <button onClick={this.menuClick} className="accordion">
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
                item.subcategory_name.map((subitem, subindex) => { 
                  return(
                    <li className="mb-1">
                    <a href="#" className="accordionItem" key={subindex}>
                      {subitem.subcategory_name}
                    </a>
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
