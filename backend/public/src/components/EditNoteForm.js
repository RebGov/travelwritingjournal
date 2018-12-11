import React from 'react';
import {withRouter} from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';
// import DeleteNote from './components/DeleteNote';

class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      title: this.props.currentNote.title || "",
      content: this.props.currentNote.content ||"",
      location: this.props.currentNote.location||"",
      // currentUser: this.props.currentUser,
      // currentNote: this.props.currentNote
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  editNote = e => {
    e.preventDefault();
    // console.log(this.props.currentUser.username, this.props.editNoteApp)

    const token = localStorage.token;
    if(token) {
       fetch(`http://localhost:3000/api/v1/notes/${this.props.currentNote.id}`, {
        method: "PATCH",
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
        .then(this.props.editNoteApp)
        .then(this.props.history.push(`/${this.props.currentUser.username}/journal_entries/current`))

    };
  };
  // want an alert that asks "are you sure"
  deleteNote = e => {
    debugger
    e.preventDefault();
    const token = localStorage.token;
    if(token){
      fetch(`http://localhost:3000/api/v1/notes/${this.props.currentNote.id}`, {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`
       }
     })
       .then(resp => resp.json())
       .then(this.props.deleteNoteApp)
       .then(this.props.history.push(`/${this.props.currentUser.username}/journal_entries/current`))

    }
  }
  render() {
 // console.log("editForm:", this.props.currentUser.username, this.props.currentNote)
    return (

      <div className="EditUserForm">
        <h2>Edit Travel Writing Journal Entry</h2>
        <Form onSubmit={this.editNote}>
            <FormGroup>
              <Label for="exampleText">Title</Label>
              <Input type="text" name="title" onChange={this.handleChange} id="exampleText" value={this.state.title}/>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Location of Story</Label>
              <Input
                type="text"
                name="location"
                id="exampleText"
                onChange={this.handleChange}
                value={this.state.location}
              />
            </FormGroup>

          <FormGroup>
            <Label for="exampleText">Your Travel Story</Label>
            <Input
              style={ {width: "100%", height: "25rem"}}
              type="textarea"
              onChange={this.handleChange}
              name="content"
              id="exampleText"
              value={this.state.content}
            />
          </FormGroup>
          <Button color="primary">Update Your Story</Button>
        </Form>
        <Form className="form-delete-note" >
          <Button  onClick={(e) => {if (window.confirm('Are you sure you wish to delete this item?')) this.deleteNote(e) }} color="danger">Delete this Story</Button>
        </Form>


      </div>
    );
  }
}
export default withRouter(EditNoteForm);
