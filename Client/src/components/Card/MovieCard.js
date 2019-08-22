import React, { Component } from "react";

// reactstrap components
import { Col, Card, CardImg, CardBody, Button } from "reactstrap";

export default class Movie extends Component {
  render() {
    return (
      <Col className=' mt-4' lg="4" >
        <Card className="card-lift--hover bg-default shadow border-0">
          <CardImg
            alt="..."
            src={require("../../assets/img/theme/img-1-1200x1000.jpg")}
            top
          />
          <blockquote className="card-blockquote">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-bg"
              preserveAspectRatio="none"
              viewBox="0 0 583 95"
            >
              <polygon className="fill-default" points="0,52 583,95 0,95" />
              <polygon
                className="fill-default"
                opacity=".2"
                points="0,42 583,95 683,0 0,95"
              />
            </svg>
            <h6 className="text-success text-uppercase font-weight-bold text-white">
              Avatar (2012)
              
            </h6>
            <small class="text-muted  text-uppercase"> Year of release : 2011</small>
            <p className="description mt-0 lead text-italic text-white">
              Explore complete collection of popular actors of bollywood,
              hollywood, international.
            </p>
            <Button
              className="mt-1"
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Delete
            </Button>
          </blockquote>
        </Card>
      </Col>
    );
  }
}
