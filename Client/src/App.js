import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss";

import Home from "./views/Home";
import Actor from "./views/Actor";
import Movie from "./views/Movie";
import Producer from "./views/Producer";


let AllRoutes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/actor",
    component: Actor
  },
  {
    path: "/movie",
    component: Movie
  },
  {
    path: "/producer",
    component: Producer
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

class App extends Component {
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
