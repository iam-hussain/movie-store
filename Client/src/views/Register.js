import React, { Component } from "react";

// nodejs library that concatenates classes

import axios from "axios";
import { print } from "graphql";
import gql from "graphql-tag";
import { connect } from "react-redux";
import { addLoginToken } from "../redux/action/userAction";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

export class Register extends Component {
  initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
  };
  state = this.initialState;
  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    var self = this;
    event.preventDefault();
    const JOIN_USER = gql`
      mutation userSignup(
        $email: String!
        $phone: String!
        $password: String!
      ) {
        userSignup(email: $email, phone: $phone, password: $password) {
          id
          email
          firstName
          lastName
          phone
          token
        }
      }
    `;
    axios
      .post("http://localhost:1100/graphql", {
        query: print(JOIN_USER),
        variables: {
          email: self.state.email,
          phone: self.state.firstname,
          password: self.state.password
        }
      })
      .then(res => {
        if (res.data.data.userSignup) {
          var userData = res.data.data.userSignup;
          self.props.addtoken({token : userData.token, userLogged: true});
          localStorage.setItem("usertoken", userData.token);
          self.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
  };

  componentDidUpdate(){
    if(this.props.userLogged === true){
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <>
        <section className="section section-lg bg-gradient-default">
          <Container className="pt-lg pb-300">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <h2 className="display-3 text-white">It's quick and easy.</h2>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section section-lg pt-lg-0 section-contact-us">
          <Container>
            <Row className="justify-content-center mt--300">
              <Col lg="8">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                      <Button
                        className="btn-neutral btn-icon mr-4"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={require("../assets/img/icons/common/github.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={require("../assets/img/icons/common/google.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
                    </div>
                    <Form role="form" onSubmit={this.handleSubmit}>
                      <Row>
                        <Col>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-hat-3" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="First Name"
                                type="text"
                                name="firstname"
                                value={this.state.username}
                                onChange={this.handleChange}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-hat-3" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Last Name"
                                type="text"
                                name="lastname"
                                value={this.state.username}
                                onChange={this.handleChange}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Confirm Password"
                            type="password"
                            autoComplete="off"
                            name="confirmpassword"
                            value={this.state.confirmpassword}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-muted font-italic">
                        <small>
                          password strength:{" "}
                          <span className="text-success font-weight-700">
                            strong
                          </span>
                        </small>
                      </div>
                      <Row className="my-4">
                        <Col xs="12">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheckRegister"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckRegister"
                            >
                              <span>
                                I agree with the{" "}
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="submit"
                          value="Register"
                        >
                          Create account
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.userReducer.token,
    userLogged : state.userReducer.userLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addtoken: value => dispatch(addLoginToken(value))
  };
};

const RegisterPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
export default RegisterPage;
