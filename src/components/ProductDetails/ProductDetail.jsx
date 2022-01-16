import React, { Component, Fragment } from "react";
import { Container, Row, Col, Badge, Form, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ReviewList from "./ReviewList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppURL from "../../api/AppURL";
import axios from "axios";

export class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      color: "",
      size: "",
      quantity: 1,
      product_code: null,
      addToCart: "Add to Cart",
    };
  }

  imageClick(e) {
    let source = e.target.src;
    let image = document.getElementById("previewImage");
    image.src = source;
    image.style.display = "block";
    image.style.objectFit = "contain";
    image.style.objectPosition = "center";
  }

  priceOption(price, offer_price) {
    var cal = Math.round(((price - offer_price) / price) * 100);
    if (offer_price == "na") {
      return (
        <div
          className="Product-price-card d-inline"
          style={{ backgroundColor: "#051b35", color: "white" }}
        >
          $&nbsp;{price}
        </div>
      );
    } else {
      return (
        <>
          <div
            className="Product-price-card d-inline"
            style={{ backgroundColor: "#051b35", color: "white" }}
          >
            $&nbsp;{offer_price}
          </div>
          <div className="Product-price-card d-inline text-secondary ">
            <strike>$&nbsp; {price}</strike>
          </div>

          <div className="Product-price-card d-inline bg-success text-white">
            {cal}% off
          </div>
        </>
      );
    }
  }

  addToCart = (e) => {
    let size = this.state.size;
    let color = this.state.color;
    let quantity = this.state.quantity;
    let product_code = document
      .getElementById("productCode")
      .getAttribute("value");

    if (size == "") {
      toast.error("Please select size", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (color == "") {
      toast.error("Please select color", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (localStorage.getItem("token") == null) {
      toast.error("Please Login First", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    let user = localStorage.getItem("user");

    let email = JSON.parse(user).email;

    if (size != "" && color != "") {
      this.setState({
        addToCart: "Adding...",
      });
      let MyFormData = new FormData();
      MyFormData.append("user_email", email);
      MyFormData.append("product_code", product_code);
      MyFormData.append("product_size", size);
      MyFormData.append("color", color);
      MyFormData.append("quantity", quantity);

      axios
        .post(AppURL.add_to_cart, MyFormData)
        .then((res) => {
          if (res.status == 200) {
            this.setState({
              addToCart: "Added to Cart",
            });
            toast.success("Added to Cart", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            this.setState({
              addToCart: "Add to Cart",
            });
            toast.error("Something went wrong. Please try again later!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    let {
      product_image,
      image1,
      image2,
      image3,
      image4,
      title,
      short_description,
      long_description,
      price,
      offer_price,
      brand,
      category,
      subcategory,
      product_code,
      color,
      size,
      product_id,
    } = this.newMethod();

    var colorDiv = "d-none";
    if (color) {
      let colorArray = color.split(",");
      var colorOption = colorArray.map((item, index) => {
        return (
          <>
            <option key={index} value={item}>
              {item}
            </option>
          </>
        );
      });
      colorDiv = "";
    } else {
      colorDiv = "d-none";
    }
    var sizeDiv = "d-none";
    if (size) {
      let sizeArray = size.split(",");
      var sizeOption = sizeArray.map((item, index) => {
        return (
          <>
            <option key={index} value={item}>
              {item}
            </option>
          </>
        );
      });
      sizeDiv = "";
    } else {
      sizeDiv = "d-none";
    }

    // if(product_code){
    //   this.setState({
    //     product_code: product_code
    //   })
    // }

    // if (this.state.product_code === null) {

    //   console.log(code);
    //   this.setState({
    //     product_code: product_code,
    //   });
    // }

    return (
      <Fragment>
        <Container className="BetweenTwoSection p-4">
          <div className="breadBody m-0 mb-5">
            <Breadcrumb className="m-0">
              <Breadcrumb.Item className="m-0">
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="m-0">
                <Link to={"/allcategory/" + category}>{category}</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="m-0">
                <Link to={"/allsubcategory/" + category + "/" + subcategory}>
                  {subcategory}
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="m-0">{title}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white pb-3 mt-4"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                  <img
                    id="previewImage"
                    className="w-75 h-auto"
                    src={product_image}
                  />
                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imageClick}
                          className="w-100 cursor-pointer"
                          src={image1}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imageClick}
                          className="w-100 cursor-pointer"
                          src={image2}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imageClick}
                          className="w-100 cursor-pointer"
                          src={image3}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imageClick}
                          className="w-100 cursor-pointer"
                          src={image4}
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">{title} </h5>
                  <h6 className="section-sub-title">{short_description}</h6>
                  <div className="input-group">
                    {this.priceOption(price, offer_price)}
                  </div>

                  <Form.Group
                    controlId=""
                    className={"form-inline w-50 col-auto mt-1 " + colorDiv}
                  >
                    <h6 className="mt-2">Choose Color</h6>
                    <Form.Select
                      defaultValue="Choose..."
                      required
                      onChange={(e) => {
                        e.preventDefault();
                        this.setState({ color: e.target.value });
                      }}
                    >
                      <option>Choose...</option>
                      {colorOption}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId=""
                    className={"form-inline w-50 col-auto mt-1" + sizeDiv}
                  >
                    <h6 className="mt-2">Choose Size</h6>
                    <Form.Select
                      defaultValue="Choose..."
                      required
                      onChange={(e) => {
                        e.preventDefault();
                        this.setState({ size: e.target.value });
                      }}
                    >
                      <option required>Choose...</option>
                      {sizeOption}
                    </Form.Select>
                  </Form.Group>

                  <h6 className="mt-2">Quantity</h6>
                  <input
                    className="form-control text-center w-50"
                    type="number"
                    placeholder="1"
                    name="quantity"
                    required
                    onChange={(e) => {
                      e.preventDefault();
                      this.setState({ quantity: e.target.value });
                    }}
                  />

                  <div className="mt-2 text-capitalize">
                    <b>Category:</b>&nbsp; {category}
                  </div>
                  <div className="mt-2 text-capitalize">
                    <b>Subcategory:</b>&nbsp; {subcategory}
                  </div>
                  <div className="mt-2 text-capitalize">
                    <b>Brand:</b>&nbsp;
                    <Badge bg="dark">{brand}</Badge>{" "}
                  </div>
                  <div className="mt-2 text-capitalize">
                    <b>Product code:</b>&nbsp;{" "}
                    <button
                      id="productCode"
                      className="bg-none border-0"
                      value={product_code}
                    >
                      {" "}
                      {product_code}
                    </button>
                  </div>

                  <div className="input-group mt-3">
                    <button
                      className="btn site-btn m-1 "
                      onClick={this.addToCart}
                    >
                      {" "}
                      <i className="fa fa-shopping-cart"></i>{" "}
                      {this.state.addToCart}
                    </button>
                    <button className="btn btn-primary m-1">
                      {" "}
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-secondary m-1">
                      {" "}
                      <i className="fa fa-heart"></i> Favourite
                    </button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  <p>{long_description}</p>
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">REVIEWS</h6>

                  <ReviewList code={product_id} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }

  newMethod() {
    let productAllData = this.props.data;
    let title = productAllData["productList"]
      ? productAllData["productList"][0]["title"]
      : "";
    let price = productAllData["productList"]
      ? productAllData["productList"][0]["price"]
      : "";
    let offer_price = productAllData["productList"]
      ? productAllData["productList"][0]["offer_price"]
      : "";
    let product_image = productAllData["productList"]
      ? productAllData["productList"][0]["product_image"]
      : "";
    let category = productAllData["productList"]
      ? productAllData["productList"][0]["category"]
      : "";
    let subcategory = productAllData["productList"]
      ? productAllData["productList"][0]["subcategory"]
      : "";
    let remark = productAllData["productList"]
      ? productAllData["productList"][0]["remark"]
      : "";
    let brand = productAllData["productList"]
      ? productAllData["productList"][0]["brand"]
      : "";
    let star_rating = productAllData["productList"]
      ? productAllData["productList"][0]["star_rating"]
      : "";
    let product_code = productAllData["productList"]
      ? productAllData["productList"][0]["product_code"]
      : "";

    let short_description = productAllData["productDetails"]
      ? productAllData["productDetails"][0]["short_description"]
      : "";
    let product_id = productAllData["productDetails"]
      ? productAllData["productDetails"][0]["product_id"]
      : "";
    let long_description = productAllData["productDetails"]
      ? productAllData["productDetails"][0]["long_description"]
      : "";
    let image1 = productAllData["productDetails"]
      ? productAllData["productDetails"][0]["image1"]
      : "";
    let image2 = productAllData["productDetails"]
      ? productAllData["productDetails"][0]["image2"]
      : "";
    let image3 = productAllData["productDetails"]
      ? productAllData["productDetails"][0]["image3"]
      : "";
    let image4 = productAllData["productDetails"]
      ? productAllData["productDetails"][0]["image4"]
      : "";
    let color = productAllData["productDetails"]
      ? productAllData["productDetails"][0]["color"]
      : "";
    let size = productAllData["productDetails"]
      ? productAllData["productDetails"][0]["size"]
      : "";
    return {
      product_image,
      image1,
      image2,
      image3,
      image4,
      title,
      short_description,
      long_description,
      price,
      offer_price,
      brand,
      category,
      subcategory,
      product_code,
      product_id,
      color,
      size,
    };
  }
}

export default ProductDetail;
