import React, { Component } from "react";

// reactstrap components
import { Col, Card, Button } from "reactstrap";

export default class Movie extends Component {
  render() {
    return (
      <Col className=" mt-4" lg="4">
        <Card className="card-lift--hover bg-default shadow border-0">
          <blockquote className="card-blockquote">
            <h6 className="text-success text-uppercase font-weight-bold text-white">
              Tony
            </h6>
            <ul class="list-unstyled mb-2">
              <li>
                <small class="text-muted  text-uppercase "> DOB : 12 June 2018</small>
              </li>
              <li>
                <small class="text-muted  text-uppercase "> Sex : Male</small>
              </li>
            </ul>
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
