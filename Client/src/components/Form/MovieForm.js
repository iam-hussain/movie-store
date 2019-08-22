import React, { Component } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";


// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";


export default class MovieFrom extends Component {
    state ={}
  render() {
    return (
        <Col lg="8">
        <Card className="bg-gradient-secondary shadow">
          <CardBody className="p-lg-5">
            <h4 className="mb-1">Want to create new movie?</h4>
            <p className="mt-0">
              Just fill and submit the form
            </p>
            
            <FormGroup
              className={classnames("mt-5", {
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
                  dateFormat="YYYY"
                />
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
                placeholder="Plot..."
                rows="4"
                type="textarea"
              />
            </FormGroup>
            <div>
              <Button
                block
                className="btn-round"
                color="default"
                size="lg"
                type="button"
              >
                Save
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
