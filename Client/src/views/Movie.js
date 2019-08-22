import React, { Fragment, Component } from "react";
import { Link } from 'react-router-dom';

import Hero from "../components/Hero/Hero";

import MovieCard from "../components/Card/MovieCard";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";


class Movie extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Hero />
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid justify-content-center">
                  <MovieCard />
                  <MovieCard />
                  <MovieCard />
                  <MovieCard />
                  <MovieCard />
                  <MovieCard />
                  <MovieCard />
                  <MovieCard />
                  <MovieCard />
                  
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default Movie;
