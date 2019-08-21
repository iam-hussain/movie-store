import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss";

import Home from "./views/Home";

let AllRoutes = [
  {
    path: "/",
    component: Home
  }
];

const CheckRoutes = props => (
  <Switch>
    {AllRoutes.map((value, key) => {
      return (
        <Route exact path={value.path} component={value.component} key={key} />
      );
    })}
  </Switch>
);

class App extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Navbar />
        <main ref="main">
          <CheckRoutes />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
