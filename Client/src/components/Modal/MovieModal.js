import React, { Component } from "react";

import config from "../../config/config";
import axios from "axios";
import moment from "moment";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

import withMovie from "../../Query/singleMovie";
import withUpdateMovie from "../../Query/updateMovie";
import withCreateMovie from "../../Query/createMovie";
import withallProducers from "../../Query/allProducer";
import withallActors from "../../Query/allActors";
import createRelation from "../../Query/createRelation";
import deleteRelation from "../../Query/deleteRelation";

class MovieModal extends Component {
  initialState = {
    id: this.props.Data ? this.props.Data.id : 0,
    name: this.props.Data ? this.props.Data.name : "",
    plot: this.props.Data ? this.props.Data.plot : "",
    poster: this.props.Data ? this.props.Data.poster : "",
    year_of_release: this.props.Data
      ? this.props.Data.year_of_release
      : moment(new Date()).format("YYYY"),
    dropdownOpen: false,
    dropDownValue: "Select Producer",
    producer_id: 0,
    errorText: ""
  };

  state = this.initialState;

  toggle(e) {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  async updateMovie() {
    await this.props.updateMovie({
      variables: {
        id: Number(this.state.id),
        name: this.state.name,
        year_of_release: this.state.year_of_release,
        plot: this.state.plot,
        poster: this.state.poster,
        producer_id: Number(this.state.producer_id)
      }
    });
  }

  async onSucess() {
    await this.props.refetch();

    this.props.onClose({
      modal: this.props.modal_name,
      data_id: this.props.data_id
    });
  }

  async handleData() {
    try {
      if(this.props.producersData && !this.props.producersData.allProducers.length) throw Error("To create movie you need to create producer first")
      var addActor = [];
      this.state.actors.map(oneActor => {
        if (oneActor.status) {
          addActor.push(Number(oneActor.id));
        }
        return null;
      });

      if (this.state.id !== 0) {
        if (this.state.poster_file) {
          const data = new FormData();
          data.append(config.file_name, this.state.poster_file);
          await axios.post(config.uploadURL, data, {}).then(async res => {
            if(res && res.data && res.data.data && res.data.data.filename){
              await this.setState({
                poster: res.data.data.filename
              });
            }else{
              throw Error("Poster image upload error")
            }
          });
        }
        await this.updateMovie();
      } else {
        if (this.state.poster_file) {
          const data = new FormData();
          data.append(config.file_name, this.state.poster_file);
          await axios.post(config.uploadURL, data, {}).then(async res => {
            if(res && res.data && res.data.data && res.data.data.filename){
              await this.setState({
                poster: res.data.data.filename
              });
            }else{
              throw Error("Poster image upload error")
            }
          });
        }
        await this.props.createMovie({
          variables: {
            name: this.state.name,
            year_of_release: this.state.year_of_release,
            plot: this.state.plot,
            poster: this.state.poster,
            producer_id: Number(this.state.producer_id),
            addactor: addActor
          }
        });
      }
      await this.onSucess();
    } catch (e) {
      this.setState({
        errorText: e.message
      });
    }
  }

  async handleFileChange(e) {
    e.preventDefault();
    this.setState({
      poster_file: e.target.files[0],
      poster: ""
    });
  }

  changeValue(e) {
    this.setState({
      dropDownValue: e.currentTarget.textContent,
      producer_id: e.currentTarget.value
    });
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDateChange = data => {
    this.setState({
      year_of_release:
        data && data._isValid && data.toDate()
          ? moment(data.toDate()).format("YYYY")
          : new Date()
    });
  };

  componentDidUpdate(previousProps, previousState) {
    if (
      this.props.Data &&
      (!previousProps.Data || previousProps.Data !== this.props.Data)
    ) {
      this.setState({
        id: this.props.Data ? this.props.Data.id : 0,
        name: this.props.Data ? this.props.Data.name : "",
        plot: this.props.Data ? this.props.Data.plot : "",
        poster: this.props.Data ? this.props.Data.poster : "",
        year_of_release: this.props.Data
          ? String(this.props.Data.year_of_release)
          : moment(new Date()).format("YYYY"),
        dropDownValue:
          this.props.Data && this.props.Data.producer && this.props.producersData.allProducers.length
            ? this.props.Data.producer.name
            : "Select Producer",
        producer_id:
          this.props.Data && this.props.Data.producer 
            ? this.props.Data.producer.id
            : 0,
        errorText: ""
      });

      var allActorFiltered = [];
      if (this.props.actorData && this.props.Data.actor) {
        allActorFiltered = this.props.actorData.map(actor => {
          if (
            this.props.Data.actor.find(selected => selected.id === actor.id)
          ) {
            return {
              ...actor,
              status: true
            };
          }
          return {
            ...actor,
            status: false
          };
        });
      }
      this.setState({
        actors: allActorFiltered
      });
    }
  }

  async handleRelation(actor, i) {
    try {
      if (this.state.id !== 0) {
        if (this.state.actors[i].status) {
          await this.props.deleteRelation({
            variables: {
              actor_id: actor,
              movie_id: this.state.id
            }
          });
        } else {
          await this.props.createRelation({
            variables: {
              actor_id: actor,
              movie_id: this.state.id
            }
          });
        }
        const updatedActors = [...this.state.actors];
        updatedActors[i].status = !updatedActors[i].status;
        this.setState({
          actors: updatedActors
        });
        await this.props.refetch();
      } else {
        const updatedActors = [...this.state.actors];
        updatedActors[i].status = !updatedActors[i].status;
        this.setState({
          actors: updatedActors
        });
      }
    } catch (e) {
      this.setState({
        errorText: e.message
      });
    }
  }

  render() {
    return (
      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={this.props.isOpen}
        toggle={() =>
          this.props.onClose({
            modal: this.props.modal_name,
            data_id: this.props.data_id
          })
        }
      >
        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-8 py-lg-8">
              <div className="text-center text-muted mb-4">
                <b>{this.props.Text.header_text}</b>
                <br />
                <b className="text-danger">{this.state.errorText}</b>
              </div>
              <Form role="form">
                <FormGroup
                  className={classnames("mt-2", {
                    focused: this.state.nameFocused
                  })}
                >
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-tv-2" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Movie Name"
                      onFocus={e => this.setState({ nameFocused: true })}
                      onBlur={e => this.setState({ nameFocused: false })}
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup className="focused">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-calendar-grid-58" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <ReactDatetime
                      inputProps={{
                        placeholder: "DOB"
                      }}
                      timeFormat={false}
                      dateFormat="YYYY"
                      name="year_of_release"
                      value={this.state.year_of_release}
                      onChange={data => this.handleDateChange(data)}
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup className="mb-4">
                  <Input
                    className="form-control-alternative"
                    cols="80"
                    name="plot"
                    placeholder="Plot..."
                    rows="4"
                    type="textarea"
                    value={this.state.plot}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="file"
                    required
                    onChange={e => this.handleFileChange(e)}
                  />
                </FormGroup>

                <FormGroup className="mb-4 text-center ">
                  <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={e => this.toggle(e)}
                  >
                    <DropdownToggle caret>
                      {this.state.dropDownValue}
                    </DropdownToggle>
                    <DropdownMenu>
                      {this.props.producersData && this.props.producersData.allProducers ? this.props.producersData.allProducers.map(
                            producer => (
                              <DropdownItem
                                onClick={e => this.changeValue(e)}
                                value={producer.id}
                                key={producer.id}
                              >
                                {producer.name}
                              </DropdownItem>
                            )
                          ): ""}
                      
                    </DropdownMenu>
                  </Dropdown>
                </FormGroup>

                <div className="text-center text-muted mt-2 mb-2">
                  <b>{this.props.Text.relation_text}</b>
                </div>
                <FormGroup className="mb-2">
                  {this.state.actors && this.state.actors.length ?
                    this.state.actors.map((actor, i) => (
                      <div
                        key={actor.id}
                        className="custom-control custom-checkbox mb-3 mr-2"
                      >
                        <input
                          name={"checkBox" + actor.id}
                          id={"check" + actor.id}
                          className="custom-control-input"
                          type="checkbox"
                          checked={actor.status}
                          onChange={e => this.handleRelation(actor.id, i)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={"check" + actor.id}
                        >
                          <span>{actor.name}</span>
                        </label>
                      </div>
                    )): <div className="text-center ">No actor found !</div>}
                </FormGroup>

                <Button
                  block
                  className="btn-round"
                  color="default"
                  size="lg"
                  type="button"
                  onClick={() => this.handleData()}
                >
                  {this.props.Text.btn_text}
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </Modal>
    );
  }
}

export default createRelation(
  deleteRelation(
    withallActors(
      withallProducers(withMovie(withUpdateMovie(withCreateMovie(MovieModal))))
    )
  )
);
