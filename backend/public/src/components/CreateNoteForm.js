import React from 'react';
import {withRouter} from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateNoteForm extends React.Component {
    state = {
        title: "",
        content: "",
        location: ""
      };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  createNewNote = e => {
    e.preventDefault();
    const token = localStorage.token;
    if(token) {
       fetch("http://localhost:3000/api/v1/new", {
        method: "POST",
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.content,
          location: this.state.location
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(this.props.createNoteApp)
        .then(this.props.history.push(`/${this.props.currentUser.username}/journal_entries/current`))
    };
  };


  render() {


    return (
      <div className="CreateUserForm">
        <h2>New Travel Writing Journal Entry</h2>
      <Form
        className="form-create-note"
        onSubmit={this.createNewNote}
        >
        <FormGroup >
          <Label for="exampleText">Title</Label>
          <Input
            type="text"
            onChange={this.handleChange}
            name="title"
            id="exampleText"
            placeholder="Journal Title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Location of Story</Label>
          <Input
            type="text"
            onChange={this.handleChange}
            name="location"
            id="exampleText"
            placeholder="City, State"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Your Travel Story</Label>
          <Input
            type="textarea"
            style={ {width: "100%", height: "25rem"}}
            onChange={this.handleChange}
            name="content"
            id="exampleText"
            placeholder="Start your travel journal..."
          />
        </FormGroup>

        <Button
          color="primary" type="submit">Save</Button>
      </Form>
    </div>
    );
  }
}
export default withRouter(CreateNoteForm);
