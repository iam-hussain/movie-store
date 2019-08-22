import React, { Fragment, Component } from "react";

import Hero from "../components/Hero/Hero";

import PersonCard from '../components/Card/PersonCard'

// reactstrap components
import {
    Container,
    Row,
    Col
  } from "reactstrap";

class Producer extends Component {
    render() {
        return (
             <Fragment>
        <Hero />
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid justify-content-center">
                <PersonCard />
                  <PersonCard />
                  <PersonCard />
                  <PersonCard />
                  <PersonCard />
                  <PersonCard />
                  <PersonCard />
                  <PersonCard />
                  <PersonCard />
                  
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
        );
    }
}

export default Producer;