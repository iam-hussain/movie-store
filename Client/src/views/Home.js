import React, { Fragment, Component } from "react";
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

import { browserHistory } from 'react-router';

import Hero from "../components/Hero/Hero";

export class Home extends Component {
  state = {
    actor : {
      title : "Movies",
      description : "Explore complete collection of popular and blockbuster bollywood, hollywood, international & regional movies online."
    }
}

handleActorClick(e) {
  e.preventDefault();
  //browserHistory.push("/actor")
}

handleMovieClick(e) {
  e.preventDefault();
  //browserHistory.push("/movie")
}

handleProducerClick(e) {
  e.preventDefault();
  //browserHistory.push("/producer")
}

  render() {
    return (
      <Fragment>
        <Hero />
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">Movies</h6>
                        <p className="description mt-3">
                          Explore complete collection of popular and blockbuster
                          bollywood, hollywood, international & regional movies
                          online.
                        </p>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick= {this.handleMovieClick}
                        >
                          View all
                        </Button>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Add
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i className="ni ni-istanbul" />
                        </div>
                        <h6 className="text-success text-uppercase">Actors</h6>
                        <p className="description mt-3">
                          Explore complete collection of popular actors of
                          bollywood, hollywood, international.
                        </p>
                        <Button
                          className="mt-4"
                          color="success"
                          href="#pablo"
                          onClick= {this.handleActorClick}
                        >
                          View all
                         </Button>
                        <Button
                          className="mt-4"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Add
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                        </div>
                        <h6 className="text-warning text-uppercase">
                          Producer
                        </h6>
                        <p className="description mt-3">
                          Explore complete collection of popular and rich
                          producer of bollywood, hollywood, international.
                        </p>
                        <Button
                          className="mt-4"
                          color="warning"
                          href="#pablo"
                          onClick= {this.handleProducerClick}
                        >
                          View all
                         </Button>
                        <Button
                          className="mt-4"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Add
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default Home;
