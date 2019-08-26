import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Row, Col, Container } from "reactstrap";

import Hero from "../components/Hero/Hero";
import MovieCard from "../components/Card/MovieCard";
import withallMovies from "../Query/allMovie";
import MovieModal from "../components/Modal/MovieModal";

class Movie extends Component {
  state = {
    hero_content: {
      title: "Movie",
      slog:
        "Here are the biggest and most anticipated movie releases still to come in 2019.",
      describe:
        "Remember the time when you had to stand in a long queue outside the theatre to book movie tickets? ... With the emergence of BookMyShow, India's biggest online ticketing portal, booking movie tickets has become a cake walk. ... Just take out your phone, launch the app, choose your movie."
    },
    data_id: 0,
    modal_text: {
      header_text: "Update Movie",
      btn_text: "Update"
    },
    hero_data: {
      text: "Create Movie",
      color: "info",
      modal_name: 'movieModal'
    }
  };

  updateModalState = data => {
    this.setState({
      [data.modal]: !this.state[data.modal],
      data_id: data.data_id
    });
    this.setState({
      modal_text: {
        header_text: data.data_id === 0 ? "Create Movie" : "Update Movie",
        btn_text: data.data_id === 0 ? "Create" : "Update"
      }
    });
  };

  renderCardData() {
    if (this.props.movieLoading) {
      return <div>Loading...</div>;
    } else if (!this.props.movieData) {
      return <div>No Data</div>;
    }
    return (
      <MovieCard
        movieData={this.props.movieData.allMovies}
        onOpen={data => this.updateModalState(data)}
        refetch={this.props.movieRefetch}
        color={this.state.hero_data.color}
      />
    );
  }

  render() {
    return (
      <Fragment>
        <Hero
          hero_content={this.state.hero_content}
          hero_data={this.state.hero_data}
          onOpen={data => this.updateModalState(data)}
        />
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid justify-content-center">
                  {this.renderCardData()}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <MovieModal
          isOpen={this.state.movieModal}
          Text={this.state.modal_text}
          data_id={this.state.data_id}
          onClose={data => this.updateModalState(data)}
          refetch={this.props.movieRefetch}
          modal_name={this.state.hero_data.modal_name}
        />
      </Fragment>
    );
  }
}

export default withallMovies(Movie);
