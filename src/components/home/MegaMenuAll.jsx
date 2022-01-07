import React, { Component } from 'react'

export class MegaMenuAll extends Component {
    constructor(props) {
        super(props);
        this.megamenu = this.megamenu.bind(this);
      }
    
      componentDidMount() {
        this.megamenu();
      }
    
      megamenu() {
        var acc = document.getElementsByClassName("accordionAll");
        var accNum = acc.length;
        for (var i = 0; i < accNum; i++) {
          acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }
      }
    render() {
        return (
            <div className="accordionMenuDivAll">
            <div className="accordionMenuDivInsideAll">
              <button className="accordionAll">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                  className="accordionMenuIconAll"
                  alt=""
                />
                &nbsp; Men's Clothing
              </button>
              <div className="panel">
                <ul className="mt-2">
                  <li>
                    <a href="#" className="accordionItemAll">
                      Men's Tshirt 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="accordionItemAll">
                      Men's Tshirt 2
                    </a>
                  </li>
                </ul>
              </div>
              <button className="accordionAll">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                  className="accordionMenuIconAll"
                  alt=""
                />
                &nbsp; Men's Clothing
              </button>
              <div className="panel">
                <ul className="mt-2">
                  <li>
                    <a href="#" className="accordionItemAll">
                      Men's Tshirt 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="accordionItemAll">
                      Men's Tshirt 2
                    </a>
                  </li>
                </ul>
              </div>
              <button className="accordionAll">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                  className="accordionMenuIconAll"
                  alt=""
                />
                &nbsp; Men's Clothing
              </button>
              <div className="panel">
                <ul className="mt-2">
                  <li>
                    <a href="#" className="accordionItemAll">
                      Men's Tshirt 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="accordionItemAll">
                      Men's Tshirt 2
                    </a>
                  </li>
                </ul>
              </div>
              <button className="accordionAll">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                  className="accordionMenuIconAll"
                  alt=""
                />
                &nbsp; Men's Clothing
              </button>
              <div className="panel">
                <ul className="mt-2">
                  <li>
                    <a href="#" className="accordionItemAll">
                      Men's Tshirt 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="accordionItemAll">
                      Men's Tshirt 2
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}

export default MegaMenuAll
