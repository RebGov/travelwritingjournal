import React from "react";
// import { Button } from 'reactstrap';
import { withRouter} from 'react-router-dom';
// import EditNoteForm from '../components/EditNoteForm'

class FullNote extends React.Component {


  // handleClickEdit =  e => {
  //   e.preventDefault()
  //   console.log(this.props.currentNote)
  //   //change tab to tab '3' in NotePage
  //
  // }
  render () {


      return (
        <div className="full-note">

        <div key={this.props.currentNote.id}>
          <h1>{this.props.currentNote.title}</h1>
          <h3>{this.props.currentNote.location}</h3>
          <p>{this.props.currentNote.content}</p>

        </div>
        {/* <Button onClick={this.handleClickEdit} color="primary">Edit Story</Button> */}
      </div>
      );
  }
}


export default withRouter(FullNote);
