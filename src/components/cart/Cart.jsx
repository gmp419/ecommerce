import React, { Component, Fragment } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Redirect } from "react-router-dom";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

export class Cart extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     product: [],
  //     loading: "",
  //     display: "d-none",
  //   };
  // }

  // componentDidMount() {
  //   window.scrollTo(0, 0);

  //   if (localStorage.getItem("token") == null) {
  //     toast.error("Please Login First", {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   } else {
  //     let user = localStorage.getItem("user");
  //     let email = JSON.parse(user).email;
  //     axios
  //       .get(AppURL.cartList(email))
  //       .then((res) => {
  //         this.setState({
  //           product: res.data,
  //           loading: "d-none",
  //           display: "",
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
      loading: "",
      display: "d-none",
      payment: "",
      name: "",
      contact: "",
      address: "",
      redirectOnSuccess: false,
    };
  }

  removeItem(id) {
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
    } else {
      let user = localStorage.getItem("user");
      let email = JSON.parse(user).email;
      axios
        .post(AppURL.deleteFromCart(email, id))
        .then((res) => {
          toast.success("Item Removed Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          window.location.replace("/cart");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  itemPlus(id, quantity, price) {
    axios
      .post(AppURL.cartItemPlus(id, quantity, price))
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  itemMinus(id, quantity, price) {
    axios
      .post(AppURL.cartItemMinus(id, quantity, price))
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  submitOrder = (e) => {
    // e.preventDefault();
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
    } else {
      let user = localStorage.getItem("user");
      let email = JSON.parse(user).email;
      let name = this.state.name;
      let contact = this.state.contact;
      let address = this.state.address;
      let payment = this.state.payment;

      if (name == "" || contact == "" || address == "" || payment == "") {
        toast.error("Please Fill All Fields");
      } else {
        let MyFormData = new FormData();
        MyFormData.append("email", email);
        MyFormData.append("contact", contact);
        MyFormData.append("delivery_address", address);
        MyFormData.append("payment_method", payment);
        MyFormData.append("delivery_charge", "0");
        MyFormData.append("urgent_delivery", "no");
        MyFormData.append("order_status", "pending");

        axios.post(AppURL.order(email), MyFormData)
        .then((res) => {

          this.setState({
            redirectOnSuccess: true,
          });

          toast.success("Order Placed Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // window.location.replace("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong! Please try again later", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      }
    }
  };

  pageRedirect = () => {
    if (this.state.redirectOnSuccess === true) {
      return <Redirect to="/orders" />;
    }
  }

  render() {

    let product = this.props.data;
    let end_price = 0;
    let label = "";

    const view = product.map((item, index) => {
      end_price = end_price + parseInt(item.total_price);
      if (end_price > 50) {
        label = (
          <label className="label-success badge bg-success w-auto mx-1 my-2">
            Free Shipping
          </label>
        );
      } else {
        end_price = end_price + parseInt(10);
        label = (
          <label className="label-danger badge bg-warning my-2 w-auto mx-1">
            Delivery Charge:&nbsp;$10
          </label>
        );
      }
      return (
        <Card key={index}>
          <Card.Body>
            <Row>
              <Col md={3} lg={3} sm={6} xs={6}>
                <img
                  className="w-auto h-100 rounded image-box"
                  src={item.product_image}
                />
              </Col>

              <Col md={6} lg={6} sm={6} xs={6}>
                <h5 className="product-name">{item.product_name}</h5>
                <h6 className="my-1">
                  Total =&nbsp;
                  <span className="text-decoration-underline text-danger">
                    ${item.total_price}
                  </span>
                </h6>
                <p className="m-0"> Price = {item.unit_price} </p>
                <p className="m-0"> Quantity = {item.quantity} </p>
                <p className="mb-0">size: {item.product_size}</p>
                <p>color: {item.color}</p>
              </Col>

              <Col md={3} lg={3} sm={12} xs={12}>
                <div className="btn-group w-100 mt-3 ">
                  <Button
                    className="btn-group btn-sm btn-outline-dark align-items-center bg-dark"
                    onClick={() =>
                      this.itemPlus(item.id, item.quantity, item.unit_price)
                    }
                  >
                    <i className="fa fa-plus text-white"></i>
                  </Button>

                  <input
                    placeholder={item.quantity}
                    className="form-control text-center mx-1"
                    type="number"
                    disabled
                  />
                  <Button
                    className="btn-group  btn-sm btn-outline-dark align-items-center bg-dark"
                    onClick={() =>
                      this.itemMinus(item.id, item.quantity, item.unit_price)
                    }
                  >
                    <i className="fa fa-minus text-white"></i>
                  </Button>
                </div>
                <Button
                  className="btn btn-block w-100 mt-3  site-btn"
                  onClick={() => this.removeItem(item.id)}
                >
                  <i className="fa fa-trash-alt"></i> Remove{" "}
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      );
    });

    return (
      <Fragment>
        <Container className="p-4" style={{ marginBottom: "50px" }}>
          <div className="section-title text-center mb-55">
            <h2>Product Cart List</h2>
          </div>

          <Row>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col className="p-1" lg={7} md={7} sm={12} xs={12}>
                      {view}
                    </Col>
                    <Col md={5} lg={5} sm={12} xs={12} className="p-1">
                      <div className="card p-2">
                        <div className="card-body">
                          <div className="container-fluid ">
                            <div className="row">
                              <div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
                                <h5 className="Product-Name text-danger text-decoration-underline">
                                  Total Due:&nbsp;${end_price}
                                </h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                <label className="form-label">
                                  Choose Payment Method
                                </label>
                                <select
                                  className="form-control"
                                  required
                                  onChange={(e) =>
                                    this.setState({ payment: e.target.value })
                                  }
                                >
                                  <option value="">Choose</option>
                                  <option value="Cash On Delivery">
                                    Cash On Delivery
                                  </option>
                                  <option value="Cash On Delivery">
                                    Stripe
                                  </option>
                                </select>
                              </div>
                              <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                <label className="form-label">Your Name</label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Test Name"
                                  required
                                  onChange={(e) =>
                                    this.setState({ name: e.target.value })
                                  }
                                />
                              </div>
                              <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                <label className="form-label">Contact:</label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="123 456 7890"
                                  required
                                  onChange={(e) =>
                                    this.setState({ contact: e.target.value })
                                  }
                                />
                              </div>

                              <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                <label className="form-label">
                                  Delivery Address
                                </label>
                                <textarea
                                  rows={2}
                                  className="form-control"
                                  type="text"
                                  placeholder="123 Example Street, City, State, Zip"
                                  required
                                  onChange={(e) =>
                                    this.setState({ address: e.target.value })
                                  }
                                />
                              </div>
                              {/* <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12 btn-group">
                              <Form.Check type="radio" aria-label="radio 1" 

                              />
                              &nbsp;
                              <label htmlFor="">Urgent Delivery <span className="badge bg-danger w-auto">Cost:$10</span></label>
                              </div> */}
                              {label}
                              <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                <button
                                  className="btn site-btn"
                                  onClick={() => this.submitOrder()}
                                >
                                  Confirm Order{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {this.pageRedirect()}
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Cart;
