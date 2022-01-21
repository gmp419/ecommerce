import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: [],
      loading: "",
      display: "d-none",
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
      axios
        .get(AppURL.favouriteList(email))
        .then((res) => {
          if (res.status == 200) {
            if (res.data.length > 0) {
              this.setState({
                favourite: res.data,
                loading: "d-none",
                display: "",
              });
            } else {
              this.setState({
                favourite: [],
                loading: "d-none",
                display: "",
              });
              // console.log(res.data);
            }
          } else {
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
  }

  removeFavourite = (e) => {
    let product_id = e.target.getAttribute("data-code");
    let user = localStorage.getItem("user");
    let email = JSON.parse(user).email;
    axios.post(AppURL.removeFavourite(product_id, email)).then((res) => {
      if (res.status == 200) {
        toast.success("Removed from Favourite", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        this.componentDidMount();
      } else {
        toast.error("Something went wrong. Please try again later", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        this.componentDidMount();
      }
    });
  };
  render() {
    let result = this.state.favourite;
    const view = result.map((item, index) => {
      return (
        <Col key={index} xl={3} lg={3} md={3} sm={6} xs={6} className="p-0">
          <Link
            to={"/productdetails/" + item.product_id}
            className="text-decoration-none"
          >
            <Card className="image-box card w-100 cursor-pointer">
              <img
                src={item.image}
                alt="Product Image"
                className="center w-75"
              />
              <Card.Body>
                <p className="product-name-on-card">{item.product_name}</p>
                {/* <p className="product-price-on-card">{$1,000.00}</p> */}
                <Button
                  variant="danger"
                  className="btn btn-sm"
                  data-code={item.product_code}
                  onClick={this.removeFavourite}
                >
                  <i className="fa fa-trash-alt"></i>&nbsp;Remove
                </Button>
              </Card.Body>
            </Card>{" "}
          </Link>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container
          className="text-center p-4"
          style={{ marginBottom: "50px" }}
          fluid={true}
        >
          <div className="section-title text-center mb-55 text-uppercase">
            <h2 className="text-uppercase">My Favourites</h2>
            <p className="text-capitalize">
              Some of Our Exclusive Collection, You May Like
            </p>
          </div>
          <div className={this.state.loading}>
            <Spinner
              animation="border"
              role="status"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                height: "100px",
                width: "100px",
                marginTop: "-50px",
                marginLeft: "-50px",
                backgroundSize: "100%",
              }}
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          <div className={this.state.display}>
            <Row>{view}</Row>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Favourite;
