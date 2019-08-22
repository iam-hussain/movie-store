import React, { Fragment, Component } from "react";

import Hero from "../components/Hero/Hero";

import PersonCard from '../components/Card/PersonCard'

import MovieFrom from '../components/Form/MovieForm'

import PersonForm from '../components/Form/PersonForm'


// reactstrap components
import {
    Container,
    Row,
    Col
  } from "reactstrap";

class Actor extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid justify-content-center">
                    <PersonForm />
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default Actor;
