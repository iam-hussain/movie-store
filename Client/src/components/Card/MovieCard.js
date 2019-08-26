import React, { Component } from "react";

// reactstrap components
import { Col, Card, CardImg, Button } from "reactstrap";
import withDeleteMovie from "../../Query/deleteMovie";

class MovieCard extends Component {
  state = {};
  handleDelete(movieID) {
    this.props.deleteMovie({
      variables: {
        id: movieID,
      },
      onCompleted: () => {
        this.props.refetch()
      }
    });
  }

  render() {

    return (
      <>
        {this.props.movieData.map(movie => (
          <Col className=" mt-4" lg="4" key={movie.id}>
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
                  {movie.name}
                </h6>
                <small className="text-muted  text-uppercase">
                  {" "}
                  Producer : {movie.producer && movie.producer.name ? movie.producer.name : ""}
                  <br />
                  {" "}
                  Year of release : {movie.year_of_release}
                </small>
                <p className="description mt-0 lead text-italic text-white">
                  {movie.plot}
                </p>
                
                <Button
                  className="mt-1"
                  color={this.props.color}
                  href="#pablo"
                  onClick={() =>
                    this.props.onOpen({
                      modal: "movieModal",
                      data_id: movie.id
                    })
                  }
                >
                  Update
                </Button>
                <Button className="mt-1" href="#pablo" color={this.props.color}
                onClick={() => this.handleDelete(movie.id)}
                >
                  Delete
                </Button>
              </blockquote>
            </Card>
          </Col>
        ))}
      </>
    );
  }
}
export default withDeleteMovie(MovieCard);
