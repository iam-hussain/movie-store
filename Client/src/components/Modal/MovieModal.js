import React, { Component } from "react";

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
import withallProducers from '../../Query/allProducer'
class MovieModal extends Component {
  initialState = {
    id: this.props.Data ? this.props.Data.id : 0,
    name: this.props.Data ? this.props.Data.name : "",
    plot: this.props.Data ? this.props.Data.plot : "",
    year_of_release: this.props.Data
      ? this.props.Data.year_of_release
      : moment(new Date()).format("YYYY"),
    dropdownOpen: false,
    dropDownValue: "Select Producer",
    producer_id: 0
  };

  state = this.initialState;

  toggle(e) {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleData() {
    if (this.state.id !== 0) {
      this.props.updateMovie({
        variables: {
          id: Number(this.state.id),
          name: this.state.name,
          year_of_release: this.state.year_of_release,
          plot: this.state.plot,
          producer_id: Number(this.state.producer_id)
        },
        onCompleted: () => {
            this.props.refetch()
          }
      });
    } else {
      this.props.createMovie({
        variables: {
          name: this.state.name,
          year_of_release: this.state.year_of_release,
          plot: this.state.plot,
          producer_id: Number(this.state.producer_id)
        },
        onCompleted: () => {
            this.props.refetch()
          }
      });
    }

    this.props.onClose({
      modal: "movieModal",
      data_id: this.props.data_id
    });
  }

  changeValue(e) {
    this.setState({
        dropDownValue: e.currentTarget.textContent,
        producer_id: e.currentTarget.value
    })
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.props)
  };

  handleDateChange = data => {
    this.setState({
      year_of_release: data && data._isValid && data.toDate() ? moment(data.toDate()).format("YYYY") : new Date()
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
        year_of_release: this.props.Data
          ? String(this.props.Data.year_of_release)
          : moment(new Date()).format("YYYY"),
          dropDownValue: this.props.Data && this.props.Data.producer ? this.props.Data.producer.name : "Select Producer",
          producer_id: this.props.Data && this.props.Data.producer ? this.props.Data.producer.id : 0
      });
    }

  }
  render() {
  //  console.log(this.props, " =====================================Modal");
    return (
      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={this.props.isOpen}
        toggle={() =>
          this.props.onClose({
            modal: "movieModal",
            data_id: this.props.data_id
          })
        }
      >
        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-8 py-lg-8">
              <div className="text-center text-muted mb-4">
                <b>{this.props.Text.header_text}</b>
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

                <FormGroup className="mb-4">
                  <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={(e) => this.toggle(e)}
                  >
                    <DropdownToggle caret>{this.state.dropDownValue}</DropdownToggle>
                    <DropdownMenu>
                    {this.props.producersData && this.props.producersData.allProducers ? this.props.producersData.allProducers.map(producer => (
                      <DropdownItem onClick={(e) => this.changeValue(e)} value={producer.id} key={producer.id}>{producer.name}</DropdownItem>
                    )): ""};
                    </DropdownMenu>
                  </Dropdown>
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

export default withallProducers(withMovie(withUpdateMovie(withCreateMovie(MovieModal))));
