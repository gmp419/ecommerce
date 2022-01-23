import axios from "axios";
import React, { Component, Fragment } from "react";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";

export class Orders extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
      console.log(email);
      axios
        .get(AppURL.orderHistory(email))
        .then((res) => {
          this.setState({
            orders: res.data,
          });
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    const data = this.state.orders;
    const view = data.map((item, index) => {
      return (
        <div className="card" key={index}>
          <div className="card-header">
            <h5>Order ID: {item.id}</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <p>Order Date: <span className="fw-bolder"> {item.order_date}&nbsp;{item.order_time}</span></p>
              </div>
              <div className="col-md-6">
                <p >Order Status: <span className="badge bg-secondary"> {item.order_status}</span></p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>Total:&nbsp; <span className="text-danger text-decoration-underline fw-bolder">${item.total_price}</span></p>
              </div>
              <div className="col-md-6">
                <p>Payment Method: <span className="fw-bolder"> {item.payment_method}</span></p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>Delivery Address:  <span className="fw-bolder">{item.delivery_address}</span></p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>Contact: <span className="fw-bolder">{item.contact}</span> </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h6>Order Items:</h6>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Size</th>
                      <th>color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {item.product_name.map((item, index) => {
                      return ( */}
                        <tr >
                          <td>{item.product_name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.unit_price}</td>
                          <td>{item.size}</td>
                          <td>{item.color}</td>
                        </tr>
                      {/* );
                    })} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <Container className="p-4" style={{ marginBottom: "50px" }}>
          <div className="section-title text-center mb-55">
            <h2>Order History</h2>
          </div>
          {view}
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Orders;
