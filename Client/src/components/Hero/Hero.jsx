import React, { Component } from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

class Hero extends Component {
  state = {};

  movierouteChange() {
    this.props.history.push("/movies");
  }

  render() {
    let { hero_content } = this.props;
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
                      {hero_content.title} <span>{hero_content.slog}</span>
                    </h1>
                    <p className="lead text-white">{hero_content.describe}</p>
                    {this.props.hero_data ? (
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0 ml-1"
                          color={this.props.hero_data.color}
                          onClick={() =>
                            this.props.onOpen({
                              modal: this.props.hero_data.modal_name,
                              data_id: 0
                            })
                          }
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-fat-add" />
                          </span>
                          <span className="btn-inner--text">
                            {this.props.hero_data.text}
                          </span>
                        </Button>
                      </div>
                    ) : (
                      <></>
                    )}
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
      </>
    );
  }
}

export default Hero;
