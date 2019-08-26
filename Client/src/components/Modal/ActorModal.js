import React, { Component } from "react";

// nodejs library that concatenates classes
import classnames from "classnames";

import moment from "moment";

// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

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
  Modal
} from "reactstrap";


class ActorModal extends Component {
  initialState = {
    id: this.props.Data ? this.props.Data.id : 0,
    name: this.props.Data ? this.props.Data.name : "",
    biodata: this.props.Data ? this.props.Data.biodata : "",
    dob: this.props.Data
      ? moment(new Date(this.props.Data.dob))
      : moment(new Date()),
  };
  
  state = this.initialState
  
  handleSubmit = event => {
    var self = this;
    console.log(event, self)
  };

   handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.props)
  };

  handleDateChange = data => {
    this.setState({
      dob: data && data._isValid && data.toDate() ? moment(data.toDate()) : new Date()
    });
  };

  render() {
    console.log(this.props)
    return (
      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={this.props.isOpen}
        toggle={() =>
          this.props.onClose({
            modal: "actorModal",
            data_id: this.props.data_id
          })
        }
      >
        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
                <b>{this.props.Text.header_text}</b>
              </div>
              <Form role="form" onSubmit={this.handleSubmit}>
              <FormGroup
              className={classnames("mt-5", {
                focused: this.state.nameFocused
              })}
            >
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-user-run" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Name"
                  type="text"
                  onFocus={e => this.setState({ nameFocused: true })}
                  onBlur={e => this.setState({ nameFocused: false })}
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
                />
              </InputGroup>
            </FormGroup>

            <FormGroup className="mb-3 ml-3">
            {/* Radio buttons */}
            <InputGroup>
           
            <div className="mr-5">
              <small className="text-uppercase font-weight-bold">Sex</small>
            </div>
            <div className="custom-control custom-radio mr-3">
              <input
                className="custom-control-input"
                defaultChecked
                id="customRadio1"
                name="custom-radio-1"
                type="radio"
              />
              <label className="custom-control-label" htmlFor="customRadio1">
                <span>Male</span>
              </label>
            </div>
            <div className="custom-control custom-radio mr-3">
              <input
                className="custom-control-input"
                id="customRadio2"
                name="custom-radio-1"
                type="radio"
              />
              <label className="custom-control-label" htmlFor="customRadio2">
                <span>Female</span>
              </label>
            </div>
            </InputGroup>
            </FormGroup>

            <FormGroup className="mb-4">

            <input
            className="custom-control-input"
            defaultChecked
            id="customRadio6"
            name="custom-radio-2"
            type="radio"
          />
          
              <Input
                className="form-control-alternative"
                cols="80"
                name="name"
                placeholder="Biodata..."
                rows="4"
                type="textarea"
              />
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

export default ActorModal;
