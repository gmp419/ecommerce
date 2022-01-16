import axios from "axios";
import React, { Component } from "react";
import AppURL from "../../api/AppURL";

export class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    const currentURL = window.location.href;
    const code = currentURL.split("/")[4];
    axios
      .get(AppURL.reviews(code))
      .then((res) => {
        this.setState({
          reviews: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let reviews = this.state.reviews;

    if (reviews.length > 0) {
      const view = reviews.map((item, index) => {
        return (
          <div key={index}>
            {" "}
            <p className=" p-0 m-0">
              <span className="Review-Title">{item.reviewer_name}</span>{" "}
              <span className="text-success badge bg-dark text-end text-white">
                {/* <i className="fa fa-star"><
                /i> <i className="fa fa-star"></i>{" "} */}
                {item.rating}
                
              </span>{" "}
            </p>
            <p>{item.comment}</p>
          </div>
        );
      });
      return <> {view}</>;
    } else {
      return <p>No reviews yet</p>;
    }
  }
}

export default ReviewList;
