import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Badge,
  Card,
  CardBody,
  CardImg
} from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      Movie Store{" "}
                      <span>The world's most popular and source for movie</span>
                    </h1>
                    <p className="lead text-white">
                      IMDb is an online database of information related to
                      films, television programs, home videos, video games, and
                      streaming content online – including cast, production crew
                      and personal biographies, plot summaries, trivia, fan and
                      critical reviews, and ratings.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
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
                        <h6 className="text-primary text-uppercase">
                          Movies
                        </h6>
                        <p className="description mt-3">
                        Explore complete collection of popular and blockbuster bollywood, hollywood, international & regional movies online. 
                        </p>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
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
                        <h6 className="text-success text-uppercase">
                          Actors
                        </h6>
                        <p className="description mt-3">
                        Explore complete collection of popular actors of bollywood, hollywood, international.
                        </p>
                        <Button
                          className="mt-4"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
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
                        Explore complete collection of popular  and rich producer of bollywood, hollywood, international.
                        </p>
                        <Button
                          className="mt-4"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
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
      </>
    );
  }
}

export default Hero;
