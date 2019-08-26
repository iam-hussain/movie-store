import React, { Fragment, Component } from "react";
import { Link, withRouter } from 'react-router-dom';
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
    hero_content : {
      title : "Movie Store",
      slog: "The world's most popular and source for movie",
      describe: "IMDb is an online database of information related to films, television programs, home videos, video games, and streaming content online – including cast, production crew and personal biographies, plot summaries, trivia, fan and critical reviews, and ratings."
    }
}

  render() {
    return (
      <Fragment>
        <Hero hero_content={this.state.hero_content}/>
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
                        <Link
                          className="mt-4 btn btn-primary"
                          color="success"
                          to = '/movie'
                        >
                          View all
                         </Link>
                        
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
                        <Link
                          className="mt-4 btn btn-success"
                          color="success"
                          to = '/actor'
                        >
                          View all
                         </Link>
                       
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
                        <Link
                          className="mt-4 btn btn-warning"
                          color="success"
                          to = '/producer'
                        >
                          View all
                         </Link>
                        
                      
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

export default withRouter(Home);
