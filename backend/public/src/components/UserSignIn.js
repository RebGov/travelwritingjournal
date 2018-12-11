import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

export default class UserSignIn extends Component {
  state = {
      username: "",
      password: "",
      currentUser: {},
      userSignedIn: false
    };


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  logIn = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(this.props.logInApp)
  };



  render () {


    return (
      <div>

      <Container className="UserSignIn">
        <h2>Sign In</h2>
        <Form className="form-signIn" onSubmit={this.logIn}>
          <Col>
            <FormGroup>
              <Label for="exampleUsernameIn">UserName</Label>
              <Input
                type="text"
                onChange={this.handleChange}
                name="username"
                id="exampleUsernameIn"
                placeholder="username"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePasswordIn">Password</Label>
              <Input
                type="password"
                onChange={this.handleChange}
                name="password"
                id="examplePasswordIn"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>

    </div>
    )
  }
}
