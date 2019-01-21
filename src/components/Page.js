import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import "../support/PageCss/Page.css";
import axios from "axios";
import { API_REFER } from "../actions/type";
import queryString from 'query-string';
import { Button } from 'reactstrap'
import Item from './Item';


class Page extends Component {
  state = {
    data_list: []
  };

  componentDidMount() {

    var params = queryString.parse(this.props.location.search)
    var choose = params.choose
    axios.get(API_REFER + choose)
      .then((res) => {
        console.log(res.data);
        this.setState({ data_list: res.data });
        console.log(this.state.data_list);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  kucinggans = () => {
    var params = queryString.parse(this.props.location.search)
    var choose = params.choose
    var ambilkucing = this.state.data_list.map((item) => {
      const { nama, desc, img_1 } = item
      return (
        <div className="col-md-4 turunin">
          <a href={`/detail?nama=` + nama + "&&choose=" + choose}>
            <div className="card mb-4 shadow-sm">
              <img className="card-img-top" alt="Refer [100%x225]" style={{ height: '225px', width: '100%', display: 'block' }} src={img_1} data-holder-rendered="true" />
              <div className="card-body">
                <h4 className="card-text">{nama}</h4>
                <p className="card-text">{desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </a>
        </div>
      )
    })
    return ambilkucing
  }

  render() {
    return (

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {this.kucinggans()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    produk: state.selectedProduct
  }
}
export default connect(mapStateToProps)(Page);
