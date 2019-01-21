import React, { Component } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Page from "./components/Page";
import test from "./components/test";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import { keepLogin, cookieChecked } from "./actions/AuthAction";
import "./support/css/HoverRefer.css";
import "./App.css";
import ItemDetail from "./components/ItemDetail";

const cookies = new Cookies();
class App extends Component {
  componentDidMount() {
    const username = cookies.get("dataUser");
    if (username !== undefined) {
      this.props.keepLogin(username);
    } else {
      this.props.cookieChecked();
    }
  }
  render() {
    return (
      <div>
        <Header />

        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/page" component={Page} />
          <Route path="/testpage" component={test} />
          <Route path="/detail" component={ItemDetail} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cookie: state.auth.cookie };
};

export default withRouter(
  connect(
    mapStateToProps,
    { keepLogin, cookieChecked }
  )(App)
);
