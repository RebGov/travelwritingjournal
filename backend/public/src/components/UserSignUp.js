import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
//user sign up page - create user form

// fetch
// POST


//edit this form for sign up  this is the log in form.
export default class UserSignUP extends Component {
  state = {
      username: "",
      password: "",
      bio: "",
      currentUser: {},
      signedIn: false
    };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createUser = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/create", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        bio: this.state.bio
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(this.props.signUpApp)
  };

  render() {

    return (
      <div >
        <Container className="UserSignUp">
          <h2>Sign Up</h2>
          <Form
            className="form-signUp"
            onSubmit={this.createUser}
            >
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  onChange={this.handleChange}
                  name="username"
                  id="exampleUsernameUp"
                  placeholder="username"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePasswordUp">Password</Label>
                <Input
                  type="password"
                  onChange={this.handleChange}
                  name="password"
                  id="examplePasswordUp"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>About</Label>
                <Input
                  style={ {width: "100%", height: "10rem"}}
                  type="text"
                  onChange={this.handleChange}
                  name="bio"
                  id="exampleBio"
                  placeholder='About yourself'
                />
              </FormGroup>
            </Col>
            <Col>
              {/* <FormGroup>
                <Label>Avatar</Label>
                <Input
                  type="text"
                  // onChange={this.handleChange}
                  name="Avatar"
                  id="exampleAvatar"
                  placeholder="default = null: This will be replaced with a photo upload"
                />
              </FormGroup> */}
            </Col>
            <Button>Submit</Button>
            {/* <Col>
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  type="text"
                  onChange={this.handleChange}
                  name="firstName"
                  id="exampleFirstName"
                  placeholder="First Name"
                />
                <Label>Last Name</Label>
                <Input
                  type="text"
                  onChange={this.handleChange}
                  name="lastName"
                  id="exampleLastName"
                  placeholder="Last Name"
                />
              </FormGroup>
            </Col> */}

            {/* <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  onChange={this.handleChange}
                  name="email"
                  id="exampleEmail"
                  placeholder="yourEmail@email.com"
                />
              </FormGroup>
            </Col> */}
          </Form>
        </Container>

      </div>
    )
  }
}
