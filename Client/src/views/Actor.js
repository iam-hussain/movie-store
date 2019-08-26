import React, { Fragment, Component } from "react";

import Hero from "../components/Hero/Hero";
import ActorCard from "../components/Card/ActorCard";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import withallActors from "../Query/allActors";
import ActorModal from "../components/Modal/ActorModal";
class Actor extends Component {
  state = {
    hero_content: {
      title: "Actor",
      slog: "An actor is a person who portrays a character in a performance",
      describe:
        "An actor is a person who portrays a character in a performance. The actor performs in the flesh in the traditional medium of the theatre or in modern media such as film, radio, and television. The analogous Greek term is ὑποκριτής, literally one who answers."
    },
    data_id: 0,
    modal_text: {
      header_text: "Update Actor",
      btn_text: "Update"
    },
    hero_data: {
      text: "Create Actor",
      color: "success",
      modal_name: 'actorModal'
    }
  };

  
  updateModalState = data => {
    console.log(data, " ==========================data,,,,,,,,,,,,,,")
    this.setState({
      [data.modal]: !this.state[data.modal],
      data_id: data.data_id
    });
    this.setState({
      modal_text: {
        header_text: data.data_id === 0 ? "Create Actor" : "Update Actor",
        btn_text: data.data_id === 0 ? "Create" : "Update"
      }
    });
  };

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  renderCardData() {
    if (this.props.actorLoading) {
      return <div>Loading...</div>;
    } else if (!this.props.actorData) {
      return <div>No Data</div>;
    }
    return (
      <ActorCard
        personData={this.props.actorData}
        onOpen={data => this.updateModalState(data)}
        refetch={this.props.actorRefetch}
        color={this.state.hero_data.color}
      />
    );
  }

  render() {
    return (
      <Fragment>
        <Hero hero_content={this.state.hero_content}
          hero_data={this.state.hero_data}
          onOpen={data => this.updateModalState(data)} />
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
        <ActorModal          
          isOpen={this.state.actorModal}
          Text={this.state.modal_text}
          data_id={this.state.data_id}
          onClose={data => this.updateModalState(data)}
          refetch={this.props.actorRefetch} 
          modal_name={this.state.hero_data.modal_name}
          />
          
      </Fragment>
    );
  }
}

export default withallActors(Actor);
