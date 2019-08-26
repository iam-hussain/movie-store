import React, { Fragment, Component } from "react";

import Hero from "../components/Hero/Hero";

import ProducerCard from "../components/Card/ProducerCard";
import ProducerModal from "../components/Modal/ProducerModal";

import withallProducers from "../Query/allProducer";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Producer extends Component {
  state = {
    hero_content: {
      title: "Producer",
      slog: "A film producer is a person who oversees film production",
      describe:
        "One who produces an artistic production like a CD, a theater production, a film, a TV program and so on. (biology) An organism that produces complex organic."
    },
    data_id: 0,
    modal_text: {
      header_text: "Update Producer",
      btn_text: "Update"
    },
    hero_data: {
      text: "Create Producer",
      color: "warning",
      modal_name: 'producerModal'
    }
  };

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  updateModalState = data => {
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

  renderCardData() {
    if (this.props.producersLoading) {
      return <div>Loading...</div>;
    } else if (!this.props.producersData) {
      return <div>No Data</div>;
    }
    return (
      <ProducerCard
        onOpen={data => this.updateModalState(data)}
        personData={this.props.producersData.allProducers}
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
        onOpen={data => this.updateModalState(data)}/>
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
        <ProducerModal
          isOpen={this.state.producerModal}
          Text={this.state.modal_text}
          data_id={this.state.data_id}
          onClose={data => this.updateModalState(data)}
          refetch={this.props.refetch}
        />
      </Fragment>
    );
  }
}

export default withallProducers(Producer);
